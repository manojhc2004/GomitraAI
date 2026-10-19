import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { applyLanguage } from "@/i18n";
import { updateLanguagePreference } from "@/api/auth";
import { useAuth } from "@/context/AuthContext";

const OPTIONS = [
  { code: "en" as const, labelKey: "lang.english" },
  { code: "kn" as const, labelKey: "lang.kannada" },
];

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { t, i18n } = useTranslation();
  const { isAuthenticated } = useAuth();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = i18n.language?.startsWith("kn") ? "kn" : "en";
  const currentLabel = current === "kn" ? t("lang.kannadaShort") : t("lang.english");

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const handleSelect = async (code: "en" | "kn") => {
    setOpen(false);
    await applyLanguage(code);
    if (isAuthenticated) {
      try {
        await updateLanguagePreference(code);
      } catch {
        // UI language is already persisted locally; backend sync is best-effort.
      }
    }
  };

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={`inline-flex items-center gap-1.5 rounded-full border border-[#e2e8f0] bg-white text-[#0f172a] font-inter font-semibold hover:bg-gray-50 transition-colors ${
          compact ? "px-3 py-2 text-sm w-full justify-between" : "px-3.5 py-2 text-sm"
        }`}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t("lang.switcherAria")}
      >
        <span>🌐 {currentLabel}</span>
        <svg
          className={`size-3.5 text-[#64748b] transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          className={`absolute z-50 mt-2 min-w-[180px] rounded-xl border border-[#e2e8f0] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.12)] p-1 ${
            compact ? "left-0 right-0" : "right-0"
          }`}
          role="listbox"
        >
          {OPTIONS.map((option) => (
            <button
              key={option.code}
              type="button"
              role="option"
              aria-selected={current === option.code}
              onClick={() => void handleSelect(option.code)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-inter font-semibold transition-colors ${
                current === option.code ? "bg-green-50 text-[#15803d]" : "text-[#475569] hover:bg-gray-50"
              }`}
            >
              {t(option.labelKey)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
