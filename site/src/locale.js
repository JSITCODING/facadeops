export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en", "pt"];

export function resolveLocale({ savedLocale, languages = [] } = {}) {
  const normalizedSavedLocale = savedLocale?.toLowerCase();
  if (SUPPORTED_LOCALES.includes(normalizedSavedLocale)) {
    return normalizedSavedLocale;
  }

  for (const language of languages) {
    const baseLanguage = language?.toLowerCase().split("-")[0];
    if (SUPPORTED_LOCALES.includes(baseLanguage)) {
      return baseLanguage;
    }
  }

  return DEFAULT_LOCALE;
}
