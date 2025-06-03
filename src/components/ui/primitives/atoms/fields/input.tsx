import * as React from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const inputVariants = tv({
  base: `
    flex h-9 w-full min-w-0 px-sm py-xs text-sm shadow-xs
    bg-background-default text-foreground placeholder:text-foreground-min
    selection:bg-tone-luminosity-300 selection:text-tone-foreground-contrast
    rounded-md border border-tone-ring-inner outline-none
    transition-[color,box-shadow]
    file:text-foreground file:inline-flex file:h-7 file:border-0 file:bg-background-default file:text-sm file:font-semibold
    disabled:!cursor-not-allowed disabled:opacity-50

    focus-visible:ring-tone-ring-outer focus-visible:ring-[1px]
  `,

  variants: {
    tone: {
      default: 'border-ring-inner focus-visible:ring-ring-outer',
      brand: 'tone palette-brand',
      danger: 'tone palette-danger',
      warning: 'tone palette-warning',
      success: 'tone palette-success',
    },

    as: {
      input: '',
      textarea: 'resize-none min-h-[10rem] max-h-[10rem] pr-sm scrollbar',
    },
  },

  defaultVariants: {
    tone: 'default',
  },
});

type InputProps = React.ComponentProps<'input'> &
  VariantProps<typeof inputVariants> & {
    invalid?: boolean;
  };

export function Input({ className, invalid = false, ...props }: InputProps) {
  return (
    <input
      aria-invalid={invalid}
      data-slot="input"
      className={inputVariants({
        ...props,
        tone: invalid ? 'danger' : props.tone,
        className,
      })}
      {...props}
    />
  );
}
