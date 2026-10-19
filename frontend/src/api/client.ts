import axios, { isAxiosError, type AxiosError } from "axios";
import { API_BASE_URL } from "@/api/config";
import { clearAccessToken, getAccessToken } from "@/auth/tokenStorage";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 120_000, // Increased timeout to 120s for long-running AI model responses
});

apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function getApiErrorMessage(error: unknown, fallback = "Something went wrong. Please try again."): string {
  if (isAxiosError(error)) {
    const axiosError = error as AxiosError<{ detail?: unknown; message?: string }>;

    if (axiosError.code === "ECONNABORTED") {
      return "Request Timeout: The request took longer than 120 seconds to respond. Please try again.";
    }

    if (!axiosError.response) {
      return `Network Error: Unable to connect to the backend server at ${API_BASE_URL}. Please ensure the backend is running.`;
    }

    const status = axiosError.response.status;
    const data = axiosError.response.data;

    let serverDetail = "";
    if (typeof data?.detail === "string" && data.detail.trim()) {
      serverDetail = data.detail.trim();
    } else if (typeof data?.message === "string" && data.message.trim()) {
      serverDetail = data.message.trim();
    } else if (Array.isArray(data?.detail)) {
      const messages = data.detail
        .map((item) => {
          if (item && typeof item === "object" && "msg" in item) {
            return String((item as { msg: unknown }).msg);
          }
          return null;
        })
        .filter(Boolean);
      if (messages.length) serverDetail = messages.join(" ");
    }

    if (status === 401) {
      return serverDetail
        ? `Unauthorized (401): ${serverDetail}`
        : "Unauthorized (401): Invalid or expired credentials. Please sign in again.";
    }

    if (status === 403) {
      return serverDetail
        ? `Forbidden (403): ${serverDetail}`
        : "Forbidden (403): You do not have permission to perform this action.";
    }

    if (status === 404) {
      return serverDetail
        ? `Not Found (404): ${serverDetail}`
        : "Not Found (404): The requested API endpoint was not found.";
    }

    if (status === 422) {
      return serverDetail
        ? `Validation Error (422): ${serverDetail}`
        : "Validation Error (422): Invalid request parameters provided.";
    }

    if (status >= 500) {
      return serverDetail
        ? `Server Error (${status}): ${serverDetail}`
        : `Server Error (${status}): The backend server encountered an error while processing your request.`;
    }

    if (serverDetail) {
      return `Error (${status}): ${serverDetail}`;
    }
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  return fallback;
}

export function isUnauthorizedError(error: unknown): boolean {
  return isAxiosError(error) && error.response?.status === 401;
}

export function handleUnauthorized(): void {
  clearAccessToken();
}
