import { useState } from "react";
import { useTranslation } from "react-i18next";
import { getApiErrorMessage } from "@/api/client";
import { downloadPredictionReport } from "@/api/reports";
import type { PredictionData } from "@/api/prediction";

interface PredictionResultProps {
  prediction: PredictionData;
  predictionId?: string | null;
  predictionTimeMs?: number | null;
  onNavigate?: (page: string, options?: any) => void;
}

function formatConfidence(value: number): string {
  return `${value.toFixed(2)}%`;
}

function formatDuration(ms: number): string {
  if (ms < 1000) return `${ms} ms`;
  return `${(ms / 1000).toFixed(2)} s`;
}

export default function PredictionResult({
  prediction,
  predictionTimeMs,
  onNavigate,
  predictionId,
}: PredictionResultProps) {
  const { t } = useTranslation();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const handleDownloadReport = async () => {
    if (!predictionId || isDownloading) return;
    setIsDownloading(true);
    setDownloadError(null);
    try {
      await downloadPredictionReport(predictionId, prediction.top3);
    } catch (error) {
      setDownloadError(getApiErrorMessage(error, t("prediction.downloadFailed")));
    } finally {
      setIsDownloading(false);
    }
  };
  return (
    <div className="border-y-2 border-[var(--pasture)] bg-[var(--paper-deep)] p-5 sm:p-6 mb-6">
      <p className="field-body text-xs font-bold uppercase tracking-[0.18em] text-[var(--clay)]">{t("prediction.eyebrow")}</p>
      <h2 className="field-heading text-[var(--ink)] text-3xl mb-4">{t("prediction.title")}</h2>

      {prediction.confidence_level === "medium" && (
        <div className="mb-4 rounded-xl border border-[#fde68a] bg-[#fffbeb] p-4" role="status">
          <p className="font-poppins font-bold text-[#92400e] text-sm">{t("prediction.moderateConfidence")}</p>
          <p className="mt-1 font-inter text-[#b45309] text-sm">{prediction.warning}</p>
          {prediction.recommendation && <p className="mt-2 font-inter text-[#92400e] text-sm"><strong>{t("prediction.recommendation")}</strong> {prediction.recommendation}</p>}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div className="bg-[var(--paper)] p-4">
          <p className="font-inter text-[#64748b] text-xs mb-1">{t("prediction.breedName")}</p>
          <p className="font-poppins font-bold text-[#0f172a] text-xl">{prediction.breed}</p>
        </div>
        <div className="bg-[var(--paper)] p-4">
          <p className="font-inter text-[#64748b] text-xs mb-1">{t("prediction.confidence")}</p>
          <p className="field-heading font-bold text-[var(--pasture)] text-3xl">
            {formatConfidence(prediction.confidence)}
          </p>
        </div>
        <div className="bg-[var(--paper)] p-4">
          <p className="font-inter text-[#64748b] text-xs mb-1">{t("prediction.predictionTime")}</p>
          <p className="font-poppins font-bold text-[#0f172a] text-xl">
            {predictionTimeMs != null ? formatDuration(predictionTimeMs) : "\u2014"}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          if (onNavigate) {
            onNavigate("/ai", {
              state: {
                breed_context: prediction.breed,
              },
            });
          }
        }}
        className="w-full mb-6 py-3 px-5 bg-[var(--pasture)] hover:bg-[var(--pasture-dark)] text-white field-body font-bold text-sm rounded-lg flex items-center justify-center gap-2.5 transition-all"
      >
        <span className="text-base">ðŸ„</span>
        <span>{t("prediction.askAi")}</span>
      </button>

      <button
        type="button"
        onClick={handleDownloadReport}
        disabled={!predictionId || isDownloading}
        className="w-full mb-3 py-3 px-5 border border-[#e2e8f0] hover:border-[#22c55e] hover:bg-green-50 disabled:cursor-not-allowed disabled:opacity-60 text-[#0f172a] font-inter font-semibold text-sm rounded-xl flex items-center justify-center gap-2.5 transition-all"
      >
        <span aria-hidden="true">ðŸ“„</span>
        <span>{isDownloading ? t("prediction.generatingReport") : t("prediction.downloadReport")}</span>
      </button>
      {downloadError && <p className="mb-4 text-center font-inter text-xs text-[#b91c1c]" role="alert">{downloadError}</p>}

      <div className="bg-[var(--paper)] p-4">
        <p className="font-inter text-[#64748b] text-xs mb-3">{t("prediction.topPredictions")}</p>
        <ol className="space-y-2">
          {prediction.top3.map((item, index) => (
            <li
              key={`${item.breed}-${index}`}
              className="flex items-center justify-between gap-3 font-inter text-sm"
            >
              <span className="font-semibold text-[#0f172a]">
                {index + 1}. {item.breed}
              </span>
              <span className="text-[#22c55e] font-semibold">{formatConfidence(item.confidence)}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

