import { apiClient, getApiErrorMessage } from "@/api/client";
import { API_BASE_URL } from "@/api/config";
import { getAccessToken } from "@/auth/tokenStorage";

export interface AIChatPayload {
  message: string;
  breed_context?: string | null;
}

export interface AIChatResponse {
  response: string;
}

export async function sendAIChatMessage(
  message: string,
  breed_context?: string | null,
): Promise<string> {
  const endpoint = `${API_BASE_URL}/api/ai/chat`;
  const token = getAccessToken();

  const payload: AIChatPayload = {
    message,
    breed_context: breed_context || null,
  };

  console.log("[AI Chat API] Sending Request:", {
    url: endpoint,
    hasToken: Boolean(token),
    tokenPrefix: token ? `${token.substring(0, 10)}...` : "NO_TOKEN",
    payload,
  });

  try {
    const response = await apiClient.post<AIChatResponse>("/api/ai/chat", payload, {
      timeout: 120_000, // 120 seconds timeout specifically for Gemini response generation
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("[AI Chat API] Response Received:", {
      status: response.status,
      statusText: response.statusText,
      data: response.data,
    });

    if (!response.data || typeof response.data.response !== "string") {
      throw new Error("Invalid Response: The server response did not contain a valid response message.");
    }

    return response.data.response;
  } catch (error: any) {
    console.error("[AI Chat API] Request Failed:", {
      url: endpoint,
      payload,
      error,
      code: error?.code,
      status: error?.response?.status,
      responseData: error?.response?.data,
      message: error?.message,
    });

    const formattedError = getApiErrorMessage(error, "Failed to connect to Gomitra AI. Please try again.");
    throw new Error(formattedError);
  }
}
