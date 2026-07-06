import React, { forwardRef } from 'react';

import { Text } from '#/components/atoms/text';
import { Input as InputAtom } from '#/components/atoms/field-input';

import { cn } from 'utils';

export type InputProps = React.ComponentProps<typeof InputAtom> & {
  label?: string;
  error?: string;
};

const ForwardInput: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = ({ label, error, className, ...rest }: InputProps, ref) => {
  return (
    <div className={cn('w-full flex flex-col items-start gap-xs', className)}>
      {label && <Text.Label>{label}</Text.Label>}

      <InputAtom ref={ref} {...rest} />

      {error && <Text.Error>{error}</Text.Error>}
    </div>
  );
};

export const Input = forwardRef(ForwardInput);
