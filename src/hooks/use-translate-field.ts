'use client';

import { useTranslations } from 'next-intl';

import { string } from '#/utils/string';

/**
 * Returns a `translateField` function that slugifies a label and looks
 * it up in the `fields` translation namespace, falling back to the
 * original value when no matching key exists.
 */
export function useTranslateField() {
  const t = useTranslations('fields');

  return function translateField(value: string) {
    const slugKey = string.slugify(value);

    return (t.has(slugKey) ? t(slugKey) : value) as string;
  };
}
