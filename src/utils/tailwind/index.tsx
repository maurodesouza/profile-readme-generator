import { createTwc } from 'react-twc';

import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const twx = createTwc({ compose: cn });

type GetThemeTokenOptionsBase<TFallback> = {
  fallbackReturn?: TFallback;
};

type GetThemeTokenOptionsFormatted<TFallback = undefined> =
  GetThemeTokenOptionsBase<TFallback> & {
    formatToNumber: true;
  };

type GetThemeTokenOptionsRaw<TFallback = undefined> =
  GetThemeTokenOptionsBase<TFallback> & {
    formatToNumber?: false;
  };

export function getThemeToken<TFallback>(
  token: string,
  options: GetThemeTokenOptionsFormatted<TFallback>
): number | TFallback;

export function getThemeToken<TFallback>(
  token: string,
  options?: GetThemeTokenOptionsRaw<TFallback>
): string | TFallback;

export function getThemeToken<TFallback>(
  token: string,
  options:
    | GetThemeTokenOptionsFormatted<TFallback>
    | GetThemeTokenOptionsRaw<TFallback> = {}
) {
  const { fallbackReturn = undefined, formatToNumber = false } = options;

  if (typeof getComputedStyle === 'undefined') return fallbackReturn;

  const styles = getComputedStyle(document.documentElement);
  const rawValue = styles.getPropertyValue(token).trim();

  if (!rawValue) return fallbackReturn;

  if (!formatToNumber) return rawValue;

  if (rawValue.endsWith('px')) {
    return parseFloat(rawValue);
  }

  if (rawValue.endsWith('rem')) {
    const htmlFontSize = styles.getPropertyValue('font-size') || '16px';
    const baseFontSize = parseFloat(htmlFontSize);

    return parseFloat(rawValue) * baseFontSize;
  }

  return fallbackReturn;
}
