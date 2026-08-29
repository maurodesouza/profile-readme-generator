import React from 'react';
import { tv } from 'tailwind-variants';

const textareaVariants = tv({
  base: `
    flex w-full min-w-0 px-sm py-xs text-sm shadow-xs
    bg-palette-base text-palette-contrast placeholder:text-palette-accent/85
    selection:bg-palette-base selection:text-palette-contrast
    rounded-md border border-palette-line outline-none
    transition-[color,box-shadow]
    file:text-palette-contrast file:inline-flex file:h-7 file:border-0 file:bg-palette-base file:text-sm file:font-semibold
    disabled:cursor-not-allowed! disabled:opacity-50
    resize-none min-h-40 max-h-40 pr-sm scrollbar
    focus-visible:ring-palette-ring focus-visible:ring-[1px]
  `,
});

type TextareaProps = React.ComponentProps<'textarea'> & {
  invalid?: boolean;
};

export function Textarea({
  className,
  invalid = false,
  ...props
}: TextareaProps) {
  return (
    <textarea
      aria-invalid={invalid}
      data-slot="textarea"
      className={textareaVariants({ className })}
      {...props}
    />
  );
}
