import { apiClient } from "@/api/client";
import { API_PREFIX } from "@/api/config";

export interface PredictionHistoryItem {
  id: string;
  breed_name: string;
  confidence: number;
  created_at: string;
}

export async function fetchPredictionHistory(): Promise<PredictionHistoryItem[]> {
  const { data } = await apiClient.get<PredictionHistoryItem[]>(`${API_PREFIX}/history`);
  return data;
}
