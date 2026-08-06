import { framer } from '#/utils/framer';
import { tailwind } from '#/utils/tailwind';
import React from 'react';
import { Reorder, motion } from 'framer-motion';

import { Icon } from '#/components/atoms/icon';
import { Text } from '#/components/atoms/text';

const variants = framer.createVariants({
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

const Sortable = tailwind.twx(Reorder.Item)`w-full flex flex-col [&+&]:mt-sm`;

const Container = tailwind.twx.div`w-full flex gap-md p-sm box-border h-16`;

function Drag(props: React.ComponentProps<'div'>) {
  const { className, ...rest } = props;

  return (
    <div
      className={tailwind.cn(
        `w-5 h-full grid place-items-center select-none
        cursor-grab! **:cursor-grab!
        active:cursor-grabbing! active:**:cursor-grabbing! active:z-10`,
        className
      )}
      {...rest}
    >
      <Icon name="menu" size={20} />
    </div>
  );
}

const Content = tailwind.twx.div`w-full`;

const Actions = tailwind.twx.div`w-10 flex flex-col items-end justify-between`;

const Img = tailwind.twx.img`w-10 h-10 block`;

const Button = tailwind.twx.button`w-5 h-5 grid place-items-center`;

const Label = tailwind.twx(Text.Strong)`capitalize`;

const Expansible = tailwind.twx(motion.div).attrs({
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
