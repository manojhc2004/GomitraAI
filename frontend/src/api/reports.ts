import { apiClient } from "@/api/client";
import { API_BASE_URL } from "@/api/config";
import type { TopPrediction } from "@/api/prediction";

const REPORT_ENDPOINT = `${API_BASE_URL}/api/reports`;

export async function downloadPredictionReport(
  predictionId: string,
  topPredictions: TopPrediction[] = [],
): Promise<void> {
  const response = await apiClient.get<Blob>(`${REPORT_ENDPOINT}/${encodeURIComponent(predictionId)}`, {
    params: topPredictions.length > 0
      ? { top_predictions: JSON.stringify(topPredictions.slice(0, 3)) }
      : undefined,
    responseType: "blob",
  });

  const objectUrl = URL.createObjectURL(response.data);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = `gomitra-prediction-${predictionId}.pdf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}
