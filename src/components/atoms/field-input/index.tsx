import * as React from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const inputVariants = tv({
  base: `
    flex h-9 w-full min-w-0 px-sm py-xs text-sm shadow-xs
    bg-palette-base text-palette-contrast placeholder:text-palette-accent/85
    selection:bg-palette-base selection:text-palette-contrast
    rounded-md border border-palette-line outline-none
    transition-[color,box-shadow]
    file:text-palette-contrast file:inline-flex file:h-7 file:border-0 file:bg-palette-base file:text-sm file:font-semibold
    disabled:cursor-not-allowed! disabled:opacity-50

    focus-visible:ring-palette-ring focus-visible:ring-[1px]
  `,

  variants: {
    tone: {
      default:
        'palette-surface border-palette-line focus-visible:ring-palette-ring',
      blue: 'palette-blue',
      danger: 'palette-danger',
      warning: 'palette-orange',
      green: 'palette-green',
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
