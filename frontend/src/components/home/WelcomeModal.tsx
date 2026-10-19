import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface WelcomeModalProps {
  open: boolean;
  userName: string;
  onClose: () => void;
  onStartPrediction: () => void;
}

export default function WelcomeModal({
  open,
  userName,
  onClose,
  onStartPrediction,
}: WelcomeModalProps) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const firstName = userName.trim().split(/\s+/)[0] || t("welcome.fallbackName");

  useEffect(() => {
    if (!open) {
      setVisible(false);
      return;
    }

    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/50 backdrop-blur-[2px]"
        aria-label={t("welcome.closeDialog")}
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-[420px] bg-white rounded-2xl sm:rounded-3xl border border-[#e2e8f0] shadow-[0_20px_50px_rgba(15,23,42,0.18)] p-6 sm:p-8 transition-all duration-300 ${
          visible ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 size-8 rounded-full text-[#64748b] hover:bg-[#f1f5f9] transition-colors"
          aria-label={t("welcome.close")}
        >
          ✕
        </button>

        <p className="text-3xl mb-3" aria-hidden="true">
          👋
        </p>
        <h2 id="welcome-title" className="font-poppins font-bold text-[#0f172a] text-xl sm:text-2xl mb-2">
          {t("welcome.title", { name: firstName })}
        </h2>
        <p className="font-inter text-[#475569] text-sm sm:text-base leading-relaxed mb-2">
          {t("welcome.body")}
          <br />
          {t("welcome.glad")}
        </p>
        <p className="font-inter text-[#64748b] text-sm leading-relaxed mb-6">
          {t("welcome.ready")}
        </p>

        <button
          type="button"
          onClick={onStartPrediction}
          className="w-full bg-[#22c55e] hover:bg-green-600 text-white font-semibold font-inter text-sm sm:text-base py-3.5 rounded-xl transition-colors"
        >
          {t("welcome.start")}
        </button>

        <button
          type="button"
          onClick={onClose}
          className="mt-3 w-full text-sm font-semibold text-[#64748b] hover:text-[#0f172a] transition-colors py-2"
        >
          {t("welcome.close")}
        </button>
      </div>
    </div>
  );
}
