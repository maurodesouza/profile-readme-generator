import { useRef } from 'react';

import { debounce } from 'utils';
import { SimpleInput, SimpleInputProps } from '../simple-input';

type InputProps = Omit<SimpleInputProps, 'onChange'> & {
  onChange?: (value: string) => void;
};

const Input = ({ label, defaultValue, onChange, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpdate = () => {
    const { value } = inputRef.current!;

    onChange?.(value);
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
