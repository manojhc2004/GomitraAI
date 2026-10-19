import { useTranslation } from "react-i18next";

interface WarningCardProps {
  message: string;
  title?: string;
  recommendation?: string;
}

export default function WarningCard({ message, title, recommendation }: WarningCardProps) {
  const { t } = useTranslation();
  const displayTitle = title ?? t("prediction.warningTitle");
  return (
    <div
      className="bg-[#fffbeb] border border-[#fde68a] rounded-3xl shadow-[0px_4px_6px_rgba(15,23,42,0.04)] p-6 mb-6"
      role="alert"
    >
      <div className="flex items-start gap-3">
        <div className="bg-[#fef3c7] rounded-full size-10 flex items-center justify-center shrink-0">
          <svg fill="none" height="20" viewBox="0 0 20 20" width="20" aria-hidden="true">
            <path
              d="M10 6.66667V10M10 13.3333H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z"
              stroke="#D97706"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div>
          <h2 className="font-poppins font-bold text-[#92400e] text-base mb-1">{displayTitle}</h2>
          <p className="font-inter text-[#b45309] text-sm leading-relaxed">{message}</p>
          {recommendation && <p className="mt-3 font-inter text-[#92400e] text-sm leading-relaxed"><strong>{t("prediction.recommendation")}</strong> {recommendation}</p>}
        </div>
      </div>
    </div>
  );
}
