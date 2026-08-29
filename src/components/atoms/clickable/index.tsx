import { tailwind } from '#/utils/tailwind';
import React from 'react';
import { Link as NextIntlLink } from '#/i18n/navigation';
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'flex items-center gap-xs rounded-md hover:no-underline!',
  variants: {
    tone: {
      default: 'palette-surface',
      blue: 'palette-blue',
      green: 'palette-green',
      warning: 'palette-orange',
      danger: 'palette-danger',
    },
    variant: {
      solid: `
          bg-palette-base! text-palette-contrast! hover:bg-palette-base-hover
          data-[tone=default]:bg-palette-soft! data-[tone=default]:text-palette-contrast!
      `,
      ghost: `
        bg-transparent! text-palette-contrast! hover:bg-palette-base! hover:text-palette-contrast!
        data-[tone=default]:hover:bg-palette-soft! data-[tone=default]:hover:text-palette-contrast!
      `,
      outline: `
        bg-palette-base! text-palette-accent!
        box-border border-palette-line!
        hover:bg-palette-base! hover:text-palette-contrast!
        data-[tone=default]:text-palette-contrast! data-[tone=default]:border-palette-line!
        data-[tone=default]:hover:bg-palette-soft! data-[tone=default]:hover:text-palette-contrast! data-[tone=default]:hover:border-palette-soft!
      `,
      icon: `
        bg-transparent! text-palette-contrast! hover:text-palette-accent!
        data-[tone=default]:hover:text-palette-contrast!
      `,
    },
    size: {
      icon: 'size-8 justify-center',
      default: 'px-md py-xs',
    },

    disabled: {
      true: 'cursor-not-allowed! opacity-50 **:cursor-not-allowed!',
      false: '',
    },
  },

  defaultVariants: {
    size: 'default',
    tone: 'default',
    variant: 'solid',
  },
});

type ButtonVariantProps = VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
};

type ButtonProps = React.ComponentProps<'button'> & ButtonVariantProps;

export const Button = tailwind.twx.button.attrs<ButtonProps>(props => ({
  'data-tone': props.tone ?? 'default',
}))(props => buttonVariants(props));

type LinkProps = ButtonVariantProps &
  React.ComponentProps<typeof NextIntlLink> & {
    className?: string;
  };

function Link(props: React.PropsWithChildren<LinkProps>) {
  const { tone = 'default', variant, size, className, ...linkProps } = props;

  return (
    <Button
      tone={tone}
      variant={variant}
      size={size}
      className={className}
      asChild
    >
      <NextIntlLink {...linkProps} />
    </Button>
  );
}

type ExternalLinkProps = ButtonProps & React.ComponentProps<'a'>;

function ExternalLink(props: ExternalLinkProps) {
  const { tone = 'default', variant, size, className, ...anchorProps } = props;

  return (
    <Button
      tone={tone}
      variant={variant}
      size={size}
      className={className}
      asChild
    >
      <a {...anchorProps} />
    </Button>
  );
}

export const Clickable = {
  Button,
  Link,
  ExternalLink,
};
