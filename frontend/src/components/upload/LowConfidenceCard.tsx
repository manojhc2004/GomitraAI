import { useTranslation } from "react-i18next";
import type { PredictionFailureResponse } from "@/api/prediction";

interface LowConfidenceCardProps {
  result: PredictionFailureResponse;
  onTryAnother: () => void;
}

export default function LowConfidenceCard({ result, onTryAnother }: LowConfidenceCardProps) {
  const { t } = useTranslation();
  return (
    <div className="mb-6 rounded-3xl border border-[#fecaca] bg-[#fef2f2] p-5 shadow-[0px_4px_6px_rgba(127,29,29,0.06)] sm:p-6" role="alert">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#fee2e2] text-xl font-bold text-[#dc2626]">!</div>
        <div>
          <h2 className="font-poppins text-base font-bold text-[#991b1b]">{t("prediction.lowConfidenceTitle")}</h2>
          <p className="mt-1 font-inter text-sm text-[#b91c1c]">{t("prediction.confidenceLabel", { value: result.confidence?.toFixed(2) ?? "\u2014" })}</p>
        </div>
      </div>
      <div className="mt-5"><p className="mb-2 font-poppins text-sm font-bold text-[#7f1d1d]">{t("prediction.possibleReasons")}</p><ul className="space-y-1 font-inter text-sm text-[#991b1b]"><li>• {t("prediction.reasonUnsupported")}</li><li>• {t("prediction.reasonBlurry")}</li><li>• {t("prediction.reasonMultiple")}</li></ul></div>
      <p className="mt-5 font-inter text-sm leading-relaxed text-[#991b1b]"><strong>{t("prediction.recommendation")}</strong> {result.recommendation}</p>
      <button type="button" onClick={onTryAnother} className="mt-5 rounded-xl bg-[#dc2626] px-4 py-3 font-poppins text-sm font-bold text-white transition-colors hover:bg-[#b91c1c]">{t("prediction.tryAnother")}</button>
    </div>
  );
}