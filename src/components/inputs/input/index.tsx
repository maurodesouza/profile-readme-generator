import { useRef } from 'react';

import { SimpleInput, SimpleInputProps } from '../simple-input';
import { events } from 'app';

import { debounce } from 'utils';

type InputProps = SimpleInputProps & {
  path: string;
};

const Input = ({ label, path, defaultValue, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdate = () => {
    const { value } = inputRef.current!;

    events.canvas.edit({ path, value });
  };

  return (
    <SimpleInput
      ref={inputRef}
      label={label}
      defaultValue={defaultValue}
      onInput={debounce(handleUpdate)}
      {...rest}
    />
  );
};

export { Input };
