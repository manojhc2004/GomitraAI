import axios, { AxiosError, isAxiosError } from "axios";
import { apiClient } from "@/api/client";
import { API_BASE_URL } from "@/api/config";

const PREDICT_ENDPOINT = `${API_BASE_URL}/api/predict`;
const REQUEST_TIMEOUT_MS = 30_000;

export interface TopPrediction {
  breed: string;
  confidence: number;
}

export interface PredictionData {
  breed: string;
  confidence: number;
  top3: TopPrediction[];
  confidence_level?: "high" | "medium" | "low";
  warning?: string;
  recommendation?: string;
}

export interface ImageQualityResult {
  acceptable: boolean;
  quality_score: number;
  issues: string[];
  recommendation: string;
}

export interface PredictionSuccessResponse {
  success: true;
  prediction: PredictionData;
  image_quality?: ImageQualityResult;
  prediction_id?: string;
}

export interface PredictionFailureResponse {
  success: false;
  message: string;
  stage?: string;
  quality_score?: number;
  issues?: string[];
  recommendation?: string;
  confidence?: number;
  top_predictions?: TopPrediction[];
}

export type PredictionResponse = PredictionSuccessResponse | PredictionFailureResponse;

export class PredictionApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PredictionApiError";
  }
}

function isPredictionData(value: unknown): value is PredictionData {
  if (!value || typeof value !== "object") return false;

  const data = value as Record<string, unknown>;
  if (typeof data.breed !== "string" || typeof data.confidence !== "number") {
    return false;
  }

  if (!Array.isArray(data.top3)) return false;

  return data.top3.every(
    (item) =>
      item &&
      typeof item === "object" &&
      typeof (item as Record<string, unknown>).breed === "string" &&
      typeof (item as Record<string, unknown>).confidence === "number",
  );
}

function parsePredictionResponse(data: unknown): PredictionResponse {
  if (!data || typeof data !== "object") {
    throw new PredictionApiError("Received an invalid response from the server.");
  }

  const response = data as Record<string, unknown>;

  if (response.success === true) {
    if (!isPredictionData(response.prediction)) {
      throw new PredictionApiError("Received an invalid prediction payload from the server.");
    }

    return {
      success: true,
      prediction: {
        ...(response.prediction as PredictionData),
        confidence_level: response.confidence_level === "high" || response.confidence_level === "medium" || response.confidence_level === "low"
          ? response.confidence_level
          : (response.prediction as PredictionData).confidence_level,
        warning: typeof response.warning === "string" ? response.warning : (response.prediction as PredictionData).warning,
        recommendation: typeof response.recommendation === "string" ? response.recommendation : (response.prediction as PredictionData).recommendation,
      },
      image_quality: isImageQualityResult(response.image_quality) ? response.image_quality : undefined,
      prediction_id: typeof response.prediction_id === "string" ? response.prediction_id : undefined,
    };
  }

  if (response.success === false && typeof response.message === "string") {
    return {
      success: false,
      message: response.message,
      stage: typeof response.stage === "string" ? response.stage : undefined,
      quality_score: typeof response.quality_score === "number" ? response.quality_score : undefined,
      issues: Array.isArray(response.issues) && response.issues.every((issue) => typeof issue === "string")
        ? response.issues
        : undefined,
      recommendation: typeof response.recommendation === "string" ? response.recommendation : undefined,
      confidence: typeof response.confidence === "number" ? response.confidence : undefined,
      top_predictions: Array.isArray(response.top_predictions) && response.top_predictions.every(isTopPrediction)
        ? response.top_predictions
        : undefined,
    };
  }

  throw new PredictionApiError("Received an unexpected response format from the server.");
}

function isTopPrediction(value: unknown): value is TopPrediction {
  return Boolean(
    value &&
    typeof value === "object" &&
    typeof (value as Record<string, unknown>).breed === "string" &&
    typeof (value as Record<string, unknown>).confidence === "number",
  );
}

function isImageQualityResult(value: unknown): value is ImageQualityResult {
  if (!value || typeof value !== "object") return false;
  const result = value as Record<string, unknown>;
  return (
    result.acceptable === true &&
    typeof result.quality_score === "number" &&
    Array.isArray(result.issues) &&
    result.issues.every((issue) => typeof issue === "string") &&
    typeof result.recommendation === "string"
  );
}

export function getPredictionErrorMessage(error: unknown): string {
  if (error instanceof PredictionApiError) {
    return error.message;
  }

  if (isAxiosError(error)) {
    const axiosError = error as AxiosError;

    if (axiosError.code === "ECONNABORTED") {
      return "The request timed out. Please try again with a smaller image or check your connection.";
    }

    if (!axiosError.response) {
      return "Unable to reach the prediction server. Make sure the backend is running at http://localhost:8000.";
    }

    const responseData = axiosError.response.data;

    if (
      responseData &&
      typeof responseData === "object" &&
      "message" in responseData &&
      typeof (responseData as { message: unknown }).message === "string"
    ) {
      return (responseData as { message: string }).message;
    }

    if (axiosError.response.status >= 500) {
      return "The prediction server encountered an error. Please try again later.";
    }

    return "Something went wrong while processing your image. Please try again.";
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return "An unexpected error occurred. Please try again.";
}

export async function predictBreed(file: File): Promise<PredictionResponse> {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const { data } = await apiClient.post<unknown>(PREDICT_ENDPOINT, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      timeout: REQUEST_TIMEOUT_MS,
    });

    return parsePredictionResponse(data);
  } catch (error) {
    if (error instanceof PredictionApiError) {
      throw error;
    }

    if (isAxiosError(error) && error.response?.data) {
      try {
        return parsePredictionResponse(error.response.data);
      } catch {
        // Fall through to the normal human-readable error handling.
      }
    }

    throw new PredictionApiError(getPredictionErrorMessage(error));
  }
}
