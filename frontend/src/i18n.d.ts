declare module "@/i18n" {
  import type { i18n } from "i18next";

  export const LANGUAGE_STORAGE_KEY: string;
  export const SUPPORTED_LANGUAGES: string[];
  export function getStoredLanguage(): "en" | "kn";
  export function persistLanguage(language: string): "en" | "kn";
  export function applyLanguage(language: string): Promise<"en" | "kn">;

  const i18nInstance: i18n;
  export default i18nInstance;
}
