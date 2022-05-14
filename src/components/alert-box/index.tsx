import { useRef, useState } from 'react';

import { events } from 'app';
import { debounce } from 'utils';

import * as S from './styles';

const BASE_URL = 'https://api.github.com/users/';
const DEBOUNCE_TIMEOUT = 500;

const AlertBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');

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

  return (
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
  );
};

export { AlertBox };
