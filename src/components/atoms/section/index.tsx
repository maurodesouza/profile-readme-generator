import { Reorder } from 'framer-motion';
import { tv, VariantProps } from 'tailwind-variants';

import { twx } from 'utils';

const containerVariants = tv({
  base: '[&+&]:mt-[calc(var(--spacing-md)/2)] [&[data-hasfloat=true]+&]:pt-xl [&[data-hasfloat=true]+&]:mt-0',

  variants: {
    float: {
      none: '',
      right: 'ml-1 float-right',
      left: 'mr-1 float-left',
    },

    clear: {
      true: 'clear-both',
      false: '',
    },
  },

  defaultVariants: {
    clear: false,
    float: 'none',
  },
});

type ContainerProps = React.ComponentProps<typeof Reorder.Item> &
  VariantProps<typeof containerVariants>;

const Container = twx(Reorder.Item)<ContainerProps>(props =>
  containerVariants(props)
);

const wrapperVariants = tv({
  base: 'w-[-webkit-fill-available] flex flex-col p-sm box-border border-transparent! hover:border-tone-luminosity-300!',
  variants: {
    state: {
      default: '',
      selected: 'border-tone-luminosity-300!',
      preview: 'cursor-default! **:cursor-default! hover:border-transparent!',
      alert: 'tone palette-warning border-tone-luminosity-300! border-dashed!',
    },
  },

  defaultVariants: {
    state: 'default',
  },
});

type WrapperProps = React.ComponentProps<'button'> &
  VariantProps<typeof wrapperVariants>;

const Wrapper = twx.button<WrapperProps>(props => wrapperVariants(props));

export const Section = {
  Container,
  Wrapper,
};
