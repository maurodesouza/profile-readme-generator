import { JSX } from 'react';
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

function Heading(props: HeadingProps) {
  const { as: Element = 'h1', className } = props;

  return (
    <Element
      className={headingVariants({
        hierarchy: Element,
        className,
      })}
      {...props}
    />
  );
}

const Paragraph = twx.p`text-foreground text-sm`;

const Link = twx(
  NextLink
)`text-tone-foreground-context text-sm hover:underline`;

const Strong = twx.p`font-semibold text-foreground-max text-sm`;

const Small = twx.p`text-foreground-min text-xs italic`;

export const Text = {
  Link,
  Small,
  Strong,
  Heading,
  Paragraph,
};
