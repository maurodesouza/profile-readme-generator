import { tailwind } from '#/utils/tailwind';
import { Reorder } from 'framer-motion';
import { tv, VariantProps } from 'tailwind-variants';

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

const Container = tailwind.twx(Reorder.Item)<ContainerProps>(props =>
  containerVariants(props)
);

const wrapperVariants = tv({
  base: 'w-[-webkit-fill-available] flex flex-col p-sm box-border border-transparent! hover:border-palette-base!',
  variants: {
    state: {
      default: '',
      selected: 'border-palette-base!',
      preview: 'cursor-default! **:cursor-default! hover:border-transparent!',
      alert: 'palette-warning border-palette-base! border-dashed!',
    },
  },

  defaultVariants: {
    state: 'default',
  },
});

type WrapperProps = React.ComponentProps<'button'> &
  VariantProps<typeof wrapperVariants>;

const Wrapper = tailwind.twx.button<WrapperProps>(props =>
  wrapperVariants(props)
);

export const Section = {
  Container,
  Wrapper,
};
