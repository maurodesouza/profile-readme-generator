'use client';

import { useTranslations } from 'next-intl';

import { Text } from '#/components/atoms/text';
import { Clickable } from '#/components/atoms/clickable';

export function CanvasErrorFallback() {
  const t = useTranslations('ui');

  function handleClear() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="h-full flex flex-col items-center text-center justify-center my-auto gap-xl">
      <Text.Heading>{t('canvasError.title')}</Text.Heading>

      <div className="flex flex-col gap-md max-w-[65rem]">
        <Text.Paragraph>
          {t('canvasError.description1')} <br /> {t('canvasError.description2')}
        </Text.Paragraph>

        <Text.Paragraph>
          {t('canvasError.issueBefore')}{' '}
          <Text.Link
            href="https://github.com/maurodesouza/profile-readme-generator/issues/new/choose"
            target="_blank"
            rel="noreferrer"
          >
            {t('canvasError.issueLink')}
          </Text.Link>{' '}
          {t('canvasError.issueAfter')}
        </Text.Paragraph>
      </div>

      <div className="flex items-center gap-md">
        <Clickable.ExternalLink
          variant="ghost"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/maurodesouza/profile-readme-generator/issues/new/choose"
        >
          {t('canvasError.createIssue')}
        </Clickable.ExternalLink>

        <Clickable.Button
          tone="warning"
          variant="outline"
          onClick={handleClear}
        >
          {t('canvasError.clearStorage')}
        </Clickable.Button>
      </div>
    </div>
  );
}
