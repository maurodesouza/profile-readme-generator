import { useRef } from 'react';

import { events } from '@events/base';
import { debounce } from 'utils';

import * as S from './styles';

const BASE_URL = 'https://api.github.com/users/';

const AlertBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheckGithubUsername = async () => {
    const { value = '' } = inputRef.current!;

    if (!value) return;

    try {
      await fetch(`${BASE_URL}${value}`);

      events.settings.edit({
        path: 'user.github',
        value,
      });
    } catch (err) {
      console.error(err);
    }
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
        ref={inputRef}
        label="Github username"
        placeholder="Your github username"
        onChange={debounce(handleCheckGithubUsername)}
      />
    </S.Container>
  );
};

export { AlertBox };
