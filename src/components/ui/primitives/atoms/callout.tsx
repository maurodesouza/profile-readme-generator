import React from 'react';
import { tv, VariantProps } from 'tailwind-variants';
import { cn } from 'utils';

const calloutVariant = tv({
  base: 'w-1 absolute top-0 bottom-0 left-0 bg-tone-luminosity-300',

  variants: {
    tone: {
      default: 'bg-background-support',
      brand: 'tone palette-brand',
      warning: 'tone palette-warning',
      danger: 'tone palette-danger',
      success: 'tone palette-success',
    },
  },

  defaultVariants: {
    tone: 'default',
  },
});

type CalloutProps = VariantProps<typeof calloutVariant> &
  React.ComponentProps<'div'>;

export function Callout(props: React.PropsWithChildren<CalloutProps>) {
  const { className, children, ...rest } = props;

  return (
    <div
      className={cn('flex flex-col gap-xs pl-md relative', className)}
      {...rest}
    >
      <div className={calloutVariant(rest)} />

      {children}
    </div>
  );
}
