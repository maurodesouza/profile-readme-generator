import React, { JSX } from 'react';
import NextLink from 'next/link';
import { tv, VariantProps } from 'tailwind-variants';

import { twx } from 'utils';

const headingVariants = tv({
  base: 'font-semibold text-foreground',
  variants: {
    hierarchy: {
      h1: 'text-xl',
      h2: 'text-lg',
      h3: 'text-md',
    },
  },
});

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: Extract<keyof JSX.IntrinsicElements, 'h1' | 'h2' | 'h3'>;
  };

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading(props, ref) {
    const { as: Element = 'h1', className } = props;

    return (
      <Element
        ref={ref}
        className={headingVariants({
          hierarchy: Element,
          className,
        })}
        {...props}
      />
    );
  }
);

const Paragraph = twx.p`text-foreground text-sm transition-all`;

const Link = twx(
  NextLink
)`text-tone-foreground-context text-sm hover:underline`;

const Clickable = twx.button`inline !text-tone-foreground-context text-sm hover:underline`;

const Strong = twx.strong`font-semibold text-foreground text-sm`;

const Small = twx.small`text-foreground text-xs italic`;

export const Text = {
  Link,
  Small,
  Strong,
  Heading,
  Paragraph,

  Clickable,
};
