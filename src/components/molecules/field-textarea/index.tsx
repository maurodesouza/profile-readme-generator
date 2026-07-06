import React, { forwardRef } from 'react';

import { Text } from '#/components/atoms/text';
import { Textarea as TextareaAtom } from '#/components/atoms/field-textarea';

import { cn } from 'utils';

export type TextareaProps = React.ComponentProps<typeof TextareaAtom> & {
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

      <TextareaAtom ref={ref} {...rest} />

      {error && <Text.Error>{error}</Text.Error>}
    </div>
  );
};

export const Textarea = forwardRef(ForwardTextarea);
