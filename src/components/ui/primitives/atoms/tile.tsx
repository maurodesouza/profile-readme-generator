import React from 'react';

import { Icon } from './icon';

import { cn, twx } from 'utils';
import { Reorder } from 'framer-motion';
import { Text } from './text';

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

export const Tile = {
  Sortable,
  Container,

  Drag,
  Content,
  Actions,

  Img,
  Button,
  Label,
};
