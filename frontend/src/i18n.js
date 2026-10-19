import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/common.json";
import kn from "./locales/kn/common.json";

export const LANGUAGE_STORAGE_KEY = "language";
export const SUPPORTED_LANGUAGES = ["en", "kn"];

export function getStoredLanguage() {
  if (typeof window === "undefined") return "en";
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return stored === "kn" ? "kn" : "en";
}

export function persistLanguage(language) {
  const next = language === "kn" ? "kn" : "en";
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
  document.documentElement.lang = next;
  return next;
}

export async function applyLanguage(language) {
  const next = persistLanguage(language);
  if (i18n.language !== next) {
    await i18n.changeLanguage(next);
  }
  return next;
}

const initialLanguage = getStoredLanguage();

if (typeof document !== "undefined") {
  document.documentElement.lang = initialLanguage;
}

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    kn: { translation: kn },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
