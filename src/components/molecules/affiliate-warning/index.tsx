'use client';

import { useTranslations } from 'next-intl';

import { Text } from '#/components/atoms/text';

export function AffiliateWarning() {
  const t = useTranslations('ui');

  return <Text.Small>{t('affiliateWarning')}</Text.Small>;
}
