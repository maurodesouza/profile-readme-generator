'use client';

import { useTranslations } from 'next-intl';

import { Text } from '#/components/atoms/text';

export function FooterOwner() {
  const t = useTranslations('ui');

  return (
    <div className="hidden h-full shrink-0 gap-sm desktop:flex">
      <img
        className="size-8 self-center"
        src="/assets/icon-32.png"
        alt={t('footer.alt')}
      />

      <div className="flex flex-col h-full justify-center">
        <Text.Strong>{t('footer.title')}</Text.Strong>
        <Text.Small className="not-italic">
          {t('footer.maintained-by')}{' '}
          <Text.Link
            href="https://github.com/maurodesouza"
            target="_blank"
            rel="noreferrer"
            className="text-xs"
          >
            {t('footer.author')}
          </Text.Link>
        </Text.Small>
      </div>
    </div>
  );
}
