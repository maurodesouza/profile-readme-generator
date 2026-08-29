'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';

import { tv } from 'tailwind-variants';

const switchVariants = tv({
  base: `
    palette-blue
    peer inline-flex h-[1.2rem] w-8 shrink-0 items-center rounded-full shadow-xs
    focus-visible:ring-[2px]
    data-[state=checked]:bg-palette-base/30! data-[state=checked]:focus-visible:ring-palette-ring/40
    data-[state=unchecked]:bg-palette-contrast/30! data-[state=unchecked]:focus-visible:ring-palette-contrast/40
    transition-all outline-none
    disabled:cursor-not-allowed disabled:opacity-50
  `,
});

const switchThumbVariants = tv({
  base: `
    palette-blue
    size-5 bg-palette-contrast pointer-events-none block rounded-full ring-0 transition-transform
    data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=checked]:bg-palette-base data-[state=unchecked]:-translate-x-1
  `,
});

type SwitchProps = React.ComponentProps<typeof SwitchPrimitive.Root>;

export function Switch(props: SwitchProps) {
  const { className, ...rest } = props;

  return (
    <div className="h-[3.8rem] grid place-items-center p-sm">
      <SwitchPrimitive.Root
        data-slot="switch"
        className={switchVariants({ className })}
        {...rest}
      >
        <SwitchPrimitive.Thumb
          data-slot="switch-thumb"
          className={switchThumbVariants()}
        />
      </SwitchPrimitive.Root>
    </div>
  );
}
