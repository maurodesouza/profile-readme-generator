import React from 'react';
import { Reorder, motion } from 'framer-motion';

import { cn, twx } from 'utils';

import { Icon } from './icon';
import { Text } from './text';

import { createFramerMotionVariants } from 'utils';

const variants = createFramerMotionVariants({
  expansible: {
    open: {
      marginTop: 12,
      height: 'auto',
      transition: { staggerChildren: 0.05, duration: 0.2 },
    },

    closed: {
      marginTop: 0,
      height: 0,
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
    },
  },
});

const Sortable = twx(Reorder.Item)`w-full flex flex-col [&+&]:mt-sm`;

const Container = twx.div`w-full flex gap-md p-sm box-border h-16`;

function Drag(props: React.ComponentProps<'div'>) {
  const { className, ...rest } = props;

  return (
    <div
      className={cn(
        `w-5 h-full grid place-items-center select-none
        !cursor-grab **:!cursor-grab
        active:!cursor-grabbing active:**:!cursor-grabbing active:z-10`,
        className
      )}
      {...rest}
    >
      <Icon name="menu" size={20} />
    </div>
  );
}

const Content = twx.div`w-full`;

const Actions = twx.div`w-10 flex flex-col items-end justify-between`;

const Img = twx.img`w-10 h-10 block`;

const Button = twx.button`w-5 h-5 grid place-items-center`;

const Label = twx(Text.Strong)`capitalize`;

const Expansible = twx(motion.div).attrs({
  initial: false,
  variants: variants.expansible,
})`overflow-hidden`;

export const Tile = {
  Sortable,
  Container,

  Drag,
  Expansible,

  Content,
  Actions,

  Img,
  Button,
  Label,
};
