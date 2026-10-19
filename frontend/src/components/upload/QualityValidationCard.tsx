import { useTranslation } from "react-i18next";
import type { PredictionFailureResponse } from "@/api/prediction";

interface QualityValidationCardProps {
  result: PredictionFailureResponse;
  onUploadAnother: () => void;
}

export default function QualityValidationCard({ result, onUploadAnother }: QualityValidationCardProps) {
  const { t } = useTranslation();
  return (
    <div className="mb-6 rounded-3xl border border-[#fed7aa] bg-[#fff7ed] p-5 shadow-[0px_4px_6px_rgba(120,53,15,0.06)] sm:p-6" role="alert">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#ffedd5] text-xl text-[#c2410c]">!</div>
        <div className="min-w-0 flex-1">
          <h2 className="font-poppins text-base font-bold text-[#9a3412]">{t("prediction.qualityFailed")}</h2>
          <p className="mt-1 font-inter text-sm text-[#c2410c]">{result.message}</p>
        </div>
        {result.quality_score != null && <div className="text-right"><span className="block font-poppins text-2xl font-extrabold text-[#c2410c]">{result.quality_score}</span><span className="font-inter text-xs text-[#9a3412]">/ 100</span></div>}
      </div>
      {result.issues && result.issues.length > 0 && <div className="mt-5"><p className="mb-2 font-poppins text-sm font-bold text-[#7c2d12]">{t("prediction.problems")}</p><ul className="space-y-1 font-inter text-sm text-[#9a3412]">{result.issues.map((issue) => <li key={issue}>• {issue}</li>)}</ul></div>}
      {result.recommendation && <p className="mt-5 rounded-xl bg-white/70 p-3 font-inter text-sm leading-relaxed text-[#7c2d12]"><strong>{t("prediction.recommendation")}</strong> {result.recommendation}</p>}
      <button type="button" onClick={onUploadAnother} className="mt-5 rounded-xl bg-[#ea580c] px-4 py-3 font-poppins text-sm font-bold text-white transition-colors hover:bg-[#c2410c]">{t("prediction.uploadAnother")}</button>
    </div>
  );
}