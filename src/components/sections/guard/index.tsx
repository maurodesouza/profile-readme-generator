import React, { FormEvent, useEffect, useRef, useState } from 'react';

import { events } from 'app';
import { CanvasStatesEnum } from 'types';
import { useCanvas, useSettings } from 'hooks';

import { SimpleInput } from 'components/inputs';
import { Icon } from 'components/ui/primitives/atoms/icon';
import { Text } from 'components/ui/primitives/atoms/text';

const BASE_URL = 'https://api.github.com/users/';

type GuardSectionProps = {
  sectionId: string;
};

export function GuardSection(
  props: React.PropsWithChildren<GuardSectionProps>
) {
  const { sectionId, children } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { previewMode } = useCanvas();
  const { settings } = useSettings();

  const { github } = settings.user;

  async function checkGithubUsername(event: FormEvent) {
    event.preventDefault();

    const { value = '' } = inputRef.current!;

    if (!value) return;

    setIsLoading(true);

    const response = await fetch(`${BASE_URL}${value}`);

    setIsLoading(false);

    if (!response.ok) {
      setError('User not found');

      return;
    }

    events.settings.edit({
      path: 'user.github',
      value,
    });
  }

  useEffect(() => {
    if (previewMode) return;

    const state = github ? CanvasStatesEnum.DEFAULT : CanvasStatesEnum.ALERT;

    setTimeout(() => {
      events.canvas.edit({
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
              To use this section, please tell us your
              <br />
              github username.
            </Text.Paragraph>
          </div>

          <SimpleInput
            error={error}
            ref={inputRef}
            label="Github username"
            placeholder="Your github username"
            disabled={isLoading}
          />
        </form>
      )}
    </>
  );
}
