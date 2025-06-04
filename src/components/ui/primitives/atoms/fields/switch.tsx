'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { tv, VariantProps } from 'tailwind-variants';

const switchVariants = tv({
  base: `
    peer inline-flex h-[1.2rem] w-8 shrink-0 items-center rounded-full shadow-xs
    focus-visible:ring-[2px]
    data-[state=checked]:!bg-tone-luminosity-300/30 data-[state=checked]:focus-visible:ring-tone-luminosity-300/40
    data-[state=unchecked]:!bg-foreground/30 data-[state=unchecked]:focus-visible:ring-foreground/40
    transition-all outline-none
    disabled:cursor-not-allowed disabled:opacity-50
  `,

  variants: {
    tone: {
      brand: 'tone palette-brand',
      success: 'tone palette-success',
      warning: 'tone palette-warning',
      danger: 'tone palette-danger',
    },
  },

  defaultVariants: {
    tone: 'brand',
  },
});

const switchThumbVariants = tv({
  base: `
    size-5 bg-foreground pointer-events-none block rounded-full ring-0 transition-transform
    data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=checked]:bg-tone-luminosity-300 data-[state=unchecked]:-translate-x-1
  `,

  variants: {
    tone: {
      brand: 'tone palette-brand',
      success: 'tone palette-success',
      warning: 'tone palette-warning',
      danger: 'tone palette-danger',
    },
  },

  defaultVariants: {
    tone: 'brand',
  },
});

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root> &
  VariantProps<typeof switchVariants>;

export function Switch(props: SwitchProps) {
  const { className, tone, ...rest } = props;

  return (
    <div className="h-[3.8rem] grid place-items-center p-sm">
      <SwitchPrimitive.Root
        data-slot="switch"
        className={switchVariants({ className, tone })}
        {...rest}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={switchThumbVariants({ tone })}
        />
      </SwitchPrimitive.Root>
    </div>
  );
}
