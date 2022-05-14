import { forwardRef, InputHTMLAttributes } from 'react';

import * as S from './styles';

export type SimpleInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

const SimpleInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  SimpleInputProps
> = ({ label, error, className, ...rest }: SimpleInputProps, ref) => {
  return (
    <S.Container className={className}>
      {label && <S.Label>{label}</S.Label>}

      <S.Input ref={ref} {...rest} />

      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

const FowardSimpleInput = forwardRef(SimpleInput);
export { FowardSimpleInput as SimpleInput };
