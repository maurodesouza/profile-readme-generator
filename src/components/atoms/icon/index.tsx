import { DynamicIcon } from 'lucide-react/dynamic';
import React from 'react';

type IconsProps = Partial<React.ComponentPropsWithoutRef<typeof DynamicIcon>>;

export function Icon(props: IconsProps) {
  const { name = 'github', size = 16, strokeWidth = 1, ...rest } = props;

  return (
    <DynamicIcon name={name} size={size} strokeWidth={strokeWidth} {...rest} />
  );
}
