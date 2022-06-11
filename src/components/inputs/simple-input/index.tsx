import {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';

import * as S from './styles';

export type SimpleInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const SimpleInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  SimpleInputProps
> = ({ label, error, className, ...rest }: SimpleInputProps, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => inputRef.current!);

  useEffect(() => {
    inputRef.current!.value = (rest.defaultValue as string) || '';
  }, [rest.defaultValue]);

  return (
    <S.Container className={className}>
      {label && <S.Label>{label}</S.Label>}

      <S.Input ref={inputRef} {...rest} />

      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

const FowardSimpleInput = forwardRef(SimpleInput);
export { FowardSimpleInput as SimpleInput };
