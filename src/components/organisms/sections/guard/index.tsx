'use client';

import { useTranslations } from 'next-intl';

import { observer } from 'mobx-react-lite';

import React, { FormEvent, useEffect, useRef, useState } from 'react';

import { Icon } from '#/components/atoms/icon';
import { Text } from '#/components/atoms/text';
import { Fields } from '#/components/molecules/fields';

import { CanvasStatesEnum } from '#/types';
import { useCanvas, useSettings } from '#/hooks';
import { actions } from '#/lib/command';

const BASE_URL = 'https://api.github.com/users/';

type GuardSectionProps = {
  sectionId: string;
};

export const GuardSection = observer(function GuardSection(
  props: React.PropsWithChildren<GuardSectionProps>
) {
  const { sectionId, children } = props;

  const t = useTranslations('ui');

  const inputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const canvasStore = useCanvas();
  const settingsStore = useSettings();

  const { github } = settingsStore.$settings.user;

  async function checkGithubUsername(event: FormEvent) {
    event.preventDefault();

    const { value = '' } = inputRef.current!;

    if (!value) return;

    setIsLoading(true);

    const response = await fetch(`${BASE_URL}${value}`);

    setIsLoading(false);

    if (!response.ok) {
      setError(t('guard-section.error'));

      return;
    }

    actions.settings.edit({
      path: 'user.github',
      value,
    });
  }

  useEffect(() => {
    if (canvasStore.$isInPreviewMode) return;

    const state = github ? CanvasStatesEnum.DEFAULT : CanvasStatesEnum.ALERT;

    setTimeout(() => {
      actions.canvas.section.edit({
        id: sectionId,
        path: 'state',
        value: state,
      });
    });
  }, [github]);

  const state = (() => {
    if (!github) return { is: 'invalid' };

    return { is: 'ok' };
  })();

  return (
    <>
      {state.is === 'ok' && <>{children}</>}

      {state.is === 'invalid' && (
        <form
          data-testid="guard-form"
          className="w-[min(100%,30rem)] flex flex-col gap-lg mx-auto"
          onSubmit={checkGithubUsername}
        >
          <div className="flex gap-lg items-center">
            <Icon
              name="alert-circle"
              size={24}
              className="text-tone-luminosity-300"
            />

            <Text.Paragraph>
              {t('guard-section.description1')}
              <br />
              {t('guard-section.description2')}
            </Text.Paragraph>
          </div>

          <Fields.Compound.Input
            data-testid="guard-input"
            error={error}
            ref={inputRef}
            label={t('guard-section.input-label')}
            placeholder={t('guard-section.input-placeholder')}
            disabled={isLoading}
          />
        </form>
      )}
    </>
  );
});
