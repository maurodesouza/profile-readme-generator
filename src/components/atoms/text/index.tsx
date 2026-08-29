import { tailwind } from '#/utils/tailwind';
import React, { JSX } from 'react';
import { Link as NextIntlLink } from '#/i18n/navigation';
import { tv, VariantProps } from 'tailwind-variants';

const headingVariants = tv({
  base: 'font-semibold text-palette-contrast',
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

const Paragraph = tailwind.twx.p`text-palette-contrast text-sm transition-all`;

const Link = tailwind.twx(
  NextIntlLink
)`text-palette-accent text-sm hover:underline`;

const Clickable = tailwind.twx
  .button`inline text-palette-accent! text-sm hover:underline`;

const Strong = tailwind.twx.strong`text-palette-contrast text-sm font-semibold`;

const Small = tailwind.twx.small`text-palette-contrast text-xs italic`;

const Label = tailwind.twx
  .label`text-palette-contrast text-sm font-semibold block`;

const Highlight = tailwind.twx.span`text-palette-accent text-sm`;

const Error = tailwind.twx(Highlight)`palette-danger text-xs`;

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
