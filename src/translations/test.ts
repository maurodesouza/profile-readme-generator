import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

import { LOCALE_CODES } from '#/i18n/locales';

const translationsDir = path.resolve(__dirname);

function loadMessages(locale: string): Record<string, unknown> {
  return JSON.parse(
    fs.readFileSync(path.join(translationsDir, `${locale}.json`), 'utf8')
  );
}

function flattenKeys(obj: Record<string, unknown>, prefix = ''): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;

    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      return flattenKeys(value as Record<string, unknown>, fullKey);
    }

    return [fullKey];
  });
}

describe('Translations', () => {
  const enKeys = flattenKeys(loadMessages('en')).sort();

  it('has one JSON file per locale in LOCALES', () => {
    for (const locale of LOCALE_CODES) {
      expect(
        fs.existsSync(path.join(translationsDir, `${locale}.json`)),
        `Missing translation file for locale "${locale}"`
      ).toBe(true);
    }
  });

  it('every locale has the same key set as en', () => {
    for (const locale of LOCALE_CODES) {
      if (locale === 'en') continue;

      const localeKeys = flattenKeys(loadMessages(locale)).sort();

      expect(localeKeys).toEqual(enKeys);
    }
  });

  it('en is the reference and has keys', () => {
    expect(enKeys.length).toBeGreaterThan(0);
  });
});
