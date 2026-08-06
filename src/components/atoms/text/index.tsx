import { tailwind } from '#/utils/tailwind';
import React, { JSX } from 'react';
import NextLink from 'next/link';
import { tv, VariantProps } from 'tailwind-variants';



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

const Paragraph = tailwind.twx.p`text-foreground text-sm transition-all`;

const Link = tailwind.twx(
  NextLink
)`text-tone-foreground-context text-sm hover:underline`;

const Clickable = tailwind.twx.button`inline text-tone-foreground-context! text-sm hover:underline`;

const Strong = tailwind.twx.strong`text-foreground text-sm font-semibold`;

const Small = tailwind.twx.small`text-foreground text-xs italic`;

const Label = tailwind.twx.label`text-foreground text-sm font-semibold block`;

const Highlight = tailwind.twx.span`text-tone-foreground-context text-sm`;

const Error = tailwind.twx(Highlight)`tone palette-danger text-xs`;

export const Text = {
  Heading,
  Paragraph,

  Link,
  Small,
  Label,
  Error,
  Strong,
  Highlight,

  Clickable,
};
