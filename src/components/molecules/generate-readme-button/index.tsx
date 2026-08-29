'use client';

import { observer } from 'mobx-react-lite';
import { useTranslations } from 'next-intl';

import { Clickable } from '#/components/atoms/clickable';
import { useCanvas } from '#/hooks';

export const GenerateReadmeButton = observer(function GenerateReadmeButton() {
  const t = useTranslations('ui');
  const canvasStore = useCanvas();

  const isEmpty = canvasStore.$isEmpty;

  if (isEmpty) {
    return (
      <Clickable.Button
        tone="green"
        disabled
        title={t('canvas.generate-readme-empty')}
      >
        {t('canvas.generate-readme')}
      </Clickable.Button>
    );
  }

  return (
    <Clickable.Link tone="green" href="/result" prefetch={false}>
      {t('canvas.generate-readme')}
    </Clickable.Link>
  );
});
