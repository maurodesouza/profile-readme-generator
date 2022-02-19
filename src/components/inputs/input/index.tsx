import { useRef, InputHTMLAttributes } from 'react';

import { events } from '@events/base';
import { useCanvas } from 'hooks';
import { debounce } from 'utils';

import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  path: string;
};

const Input = ({ label, path, defaultValue, ...rest }: InputProps) => {
  const { currentSection } = useCanvas();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdate = () => {
    const { value } = inputRef.current!;
    const id = currentSection!.id;

    events.canvas.edit({ id, path, value });
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
