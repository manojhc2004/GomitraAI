import { useTranslation } from "react-i18next";

interface ErrorCardProps {
  message: string;
  title?: string;
}

export default function ErrorCard({ message, title }: ErrorCardProps) {
  const { t } = useTranslation();
  const displayTitle = title ?? t("prediction.somethingWrong");
  return (
    <div
      className="bg-[#fef2f2] border border-[#fecaca] rounded-3xl shadow-[0px_4px_6px_rgba(15,23,42,0.04)] p-6 mb-6"
      role="alert"
    >
      <div className="flex items-start gap-3">
        <div className="bg-[#fee2e2] rounded-full size-10 flex items-center justify-center shrink-0">
          <svg fill="none" height="20" viewBox="0 0 20 20" width="20" aria-hidden="true">
            <path
              d="M10 6.66667V10M10 13.3333H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3333 10 18.3333C5.39763 18.3333 1.66667 14.6024 1.66667 10C1.66667 5.39763 5.39763 1.66667 10 1.66667C14.6024 1.66667 18.3333 5.39763 18.3333 10Z"
              stroke="#DC2626"
              strokeLinecap="round"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div>
          <h2 className="font-poppins font-bold text-[#991b1b] text-base mb-1">{displayTitle}</h2>
          <p className="font-inter text-[#b91c1c] text-sm leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
}
