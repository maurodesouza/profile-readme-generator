import React from 'react';

import { Text } from '#/components/atoms/text';
import { Switch as SwitchAtom } from '#/components/atoms/field-switch';

import { cn } from 'utils';

type SwitchProps = React.ComponentProps<typeof SwitchAtom> & {
  label: string;
  direction?: 'column' | 'row';
};

export function Switch(props: SwitchProps) {
  const { label, direction = 'row', ...rest } = props;

  return (
    <div
      className={cn(
        'flex items-center',
        direction === 'column' && 'flex-col-reverse items-start'
      )}
    >
      <SwitchAtom {...rest} />

      <Text.Label>{label}</Text.Label>
    </div>
  );
}
