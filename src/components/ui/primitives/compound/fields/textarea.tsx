import React, { forwardRef } from 'react';

import { Text } from 'components/ui/primitives/atoms/text';
import { AtomsFields } from 'components/ui/primitives/atoms/fields';

import { cn } from 'utils';

export type TextareaProps = React.ComponentProps<
  typeof AtomsFields.Textarea
> & {
  label?: string;
  error?: string;
};

const ForwardTextarea: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextareaProps
> = ({ label, error, className, ...rest }: TextareaProps, ref) => {
  return (
    <div className={cn('w-full flex flex-col items-start gap-xs', className)}>
      {label && <Text.Label>{label}</Text.Label>}

      <AtomsFields.Textarea ref={ref} {...rest} />

      {error && <Text.Error>{error}</Text.Error>}
    </div>
  );
};

export const Textarea = forwardRef(ForwardTextarea);
