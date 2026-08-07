'use client';

import { useTranslations } from 'next-intl';

import { actions } from '#/lib/command';

import { Text } from '#/components/atoms/text';
import { ShareModal } from '#/components/molecules/share-modal';
import { DisplayBlock } from '#/components/atoms/display-block';

import { templates } from '#/resources';
import { CanvasSection } from '#/types';

const MAX_TEMPLATES_DISPLAY = 8;

export function Welcome() {
  const t = useTranslations('ui');

  return (
    <div className="flex flex-col items-center justify-between text-center pt-[calc(var(--spacing-xl)_*_3)]">
      <div className="flex flex-col gap-xs mb-md">
        <Text.Heading>{t('welcome.heading')}</Text.Heading>
        <Text.Heading as="h3">
          <span className="hidden tablet:inline">🚀</span>{' '}
          {t('welcome.subheading')}{' '}
          <span className="hidden tablet:inline">⚡</span>
        </Text.Heading>
      </div>

      <Text.Paragraph className="max-w-[46rem] mb-xl mt-md">
        {t('welcome.description')}
      </Text.Paragraph>

      <div className="hidden w-full max-w-[60rem] flex-col gap-md pb-xl tablet:flex">
        <div className="grid grid-cols-4 gap-md w-full items-start content-start">
          {templates
            .slice(0, MAX_TEMPLATES_DISPLAY)
            .map(({ template }, index) => (
              <button
                key={index}
                onClick={() =>
                  actions.canvas.preview.sections(template as CanvasSection[])
                }
              >
                <DisplayBlock.Container>
                  <DisplayBlock.Content>
                    <DisplayBlock.Label className="text-xl">
                      {index + 1}
                    </DisplayBlock.Label>
                  </DisplayBlock.Content>
                </DisplayBlock.Container>
              </button>
            ))}
        </div>

        <Text.Small>{t('welcome.template-hint')}</Text.Small>
      </div>

      <Text.Paragraph className="max-w-96 mt-auto">
        {t('welcome.footer-before-repo')}{' '}
        <Text.Link
          href="https://github.com/maurodesouza/profile-readme-generator"
          target="_blank"
          rel="noreferrer"
        >
          {t('welcome.footer-repo')}
        </Text.Link>{' '}
        {t('welcome.footer-before-share')}{' '}
        <Text.Clickable onClick={() => actions.modal.open(ShareModal)}>
          {t('welcome.footer-share')}
        </Text.Clickable>{' '}
        {t('welcome.footer-after-share')}
      </Text.Paragraph>
    </div>
  );
}
