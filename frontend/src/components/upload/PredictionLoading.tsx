import { useTranslation } from "react-i18next";

interface PredictionLoadingProps {
  message?: string;
  className?: string;
}

export default function PredictionLoading({
  message,
  className = "",
}: PredictionLoadingProps) {
  const { t } = useTranslation();
  const displayMessage = message ?? t("prediction.analyzing");
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div
        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label={t("prediction.loading")}
      />
      <span>{displayMessage}</span>
    </div>
  );
}
