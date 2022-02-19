import { useRef, InputHTMLAttributes } from 'react';

import { events } from '@events/base';
import { debounce } from 'utils';

import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  path: string;
};

const Input = ({ label, path, defaultValue, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdate = () => {
    const { value } = inputRef.current!;

    events.canvas.edit({ path, value });
  };

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        ref={inputRef}
        defaultValue={defaultValue}
        onInput={debounce(handleUpdate)}
        {...rest}
      />
    </S.Container>
  );
};

export { Input };
