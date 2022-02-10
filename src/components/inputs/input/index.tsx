import { useRef } from 'react';

import { events } from '@events/base';
import { useCanvas } from 'hooks';

import { debounce, getDeepObjectProperty } from 'utils';
import * as S from './styles';

type InputProps = {
  label: string;
  path: string;
};

const Input = ({ label, path }: InputProps) => {
  const { currentContent } = useCanvas();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdate = () => {
    const { value } = inputRef.current!;
    const id = currentContent!.id;

    events.canvas.edit({ id, path, value });
  };

  const defaultValue = getDeepObjectProperty<string>(
    currentContent?.props,
    path
  );

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        key={currentContent?.id}
        ref={inputRef}
        defaultValue={defaultValue}
        onInput={debounce(handleUpdate)}
      />
    </S.Container>
  );
};

export { Input };
