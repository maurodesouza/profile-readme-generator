import { tailwind } from '#/utils/tailwind';
import React from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const calloutVariant = tv({
  base: 'w-1 absolute top-0 bottom-0 left-0 bg-palette-base',

  variants: {
    soft: {
      true: 'bg-palette-soft',
      false: '',
    },
  },
});

type CalloutProps = VariantProps<typeof calloutVariant> &
  React.ComponentProps<'div'>;

export function Callout(props: React.PropsWithChildren<CalloutProps>) {
  const { className, children, soft, ...rest } = props;

  return (
    <div
      className={tailwind.cn('flex flex-col gap-xs pl-md relative', className)}
      {...rest}
    >
      <div className={calloutVariant({ soft })} />

      {children}
    </div>
  );
}
