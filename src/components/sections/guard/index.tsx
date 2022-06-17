import { useEffect, useRef, useState } from 'react';

import { events } from 'app';
import { useCanvas, useSettings } from 'hooks';

import { CanvasStatesEnum } from 'types';
import { debounce } from 'utils';

import * as S from './styles';

const BASE_URL = 'https://api.github.com/users/';
const DEBOUNCE_TIMEOUT = 500;

type GuardSectionProps = {
  sectionId: string;
  children: React.ReactNode;
};

const GuardSection = ({ children, sectionId }: GuardSectionProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState('');

  const { previewMode } = useCanvas();
  const { settings } = useSettings();

  const { github } = settings.user;

  const handleCheckGithubUsername = async () => {
    const { value = '' } = inputRef.current!;

    if (!value) return;

    const response = await fetch(`${BASE_URL}${value}`);

    if (!response.ok) {
      setError('User not found');

      return;
    }

    events.settings.edit({
      path: 'user.github',
      value,
    });
  };

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

  return (
    <>
      {github ? (
        <>{children}</>
      ) : (
        <S.Container>
          <S.AlertIcon size={24} />

          <S.Text>
            To use this section, please tell us your
            <br />
            github username.
          </S.Text>

          <S.Input
            error={error}
            ref={inputRef}
            label="Github username"
            placeholder="Your github username"
            onChange={debounce(handleCheckGithubUsername, DEBOUNCE_TIMEOUT)}
          />
        </S.Container>
      )}
    </>
  );
};

export { GuardSection };
