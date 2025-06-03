import React, { forwardRef } from 'react';

import { Text } from 'components/ui/primitives/atoms/text';
import { AtomsFields } from 'components/ui/primitives/atoms/fields';

import { cn } from 'utils';

export type InputProps = React.ComponentProps<typeof AtomsFields.Input> & {
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

      <AtomsFields.Input ref={ref} {...rest} />

      {error && <Text.Error>{error}</Text.Error>}
    </div>
  );
};

export const Input = forwardRef(ForwardInput);
