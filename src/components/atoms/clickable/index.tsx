import { tailwind } from '#/utils/tailwind';
import React from 'react';
import { Link as NextIntlLink } from '#/i18n/navigation';
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'flex items-center gap-xs rounded-md hover:no-underline!',
  variants: {
    variant: {
      solid: `
          bg-palette-base! text-palette-contrast! hover:bg-palette-base-hover!
          data-[soft=true]:bg-palette-soft! data-[soft=true]:text-palette-contrast!
      `,
      ghost: `
        bg-transparent! text-palette-contrast! hover:bg-palette-base! hover:text-palette-contrast!
        data-[soft=true]:hover:bg-palette-soft! data-[soft=true]:hover:text-palette-contrast!
      `,
      outline: `
        bg-palette-base! text-palette-accent!
        box-border border-palette-line!
        hover:bg-palette-base! hover:text-palette-contrast!
        data-[soft=true]:text-palette-contrast! data-[soft=true]:border-palette-line!
        data-[soft=true]:hover:bg-palette-soft! data-[soft=true]:hover:text-palette-contrast! data-[soft=true]:hover:border-palette-soft!
      `,
      icon: `
        bg-transparent! text-palette-line! hover:text-palette-accent!
        data-[soft=true]:hover:text-palette-contrast!
      `,
    },
    size: {
      icon: 'size-8 justify-center',
      default: 'px-md py-xs',
    },

    soft: {
      true: '',
      false: '',
    },

    disabled: {
      true: 'cursor-not-allowed! opacity-50 **:cursor-not-allowed!',
      false: '',
    },
  },

  defaultVariants: {
    size: 'default',
    variant: 'solid',
  },
});

type ButtonVariantProps = VariantProps<typeof buttonVariants> & {
  asChild?: boolean;
};

type ButtonProps = React.ComponentProps<'button'> & ButtonVariantProps;

export const Button = tailwind.twx.button.attrs<ButtonProps>(props => ({
  'data-soft': props.soft ? 'true' : 'false',
}))(props => buttonVariants(props));

type LinkProps = ButtonVariantProps &
  React.ComponentProps<typeof NextIntlLink> & {
    className?: string;
  };

function Link(props: React.PropsWithChildren<LinkProps>) {
  const { variant, size, soft, className, ...linkProps } = props;

  return (
    <Button
      soft={soft}
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
  const { variant, size, soft, className, ...anchorProps } = props;

  return (
    <Button
      soft={soft}
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
