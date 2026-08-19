/**
 * Single source of truth for the application locales.
 *
 * To add a new language:
 * 1. Append an entry to `LOCALES` below.
 * 2. Create the matching `src/translations/<code>.json` file.
 *
 * Everything else (routing, navigation, switcher, sitemap, tests)
 * derives from this list automatically.
 */
export const LOCALES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'pt-BR', label: 'Português (Brasil)', flag: '🇧🇷' },
] as const;

export type AppLocale = (typeof LOCALES)[number]['code'];

export const LOCALE_CODES = LOCALES.map(locale => locale.code) as AppLocale[];

export const DEFAULT_LOCALE: AppLocale = 'en';

export function getLocaleMeta(code: string) {
  return LOCALES.find(locale => locale.code === code);
}

export function isAppLocale(code: string): code is AppLocale {
  return LOCALE_CODES.includes(code as AppLocale);
}
