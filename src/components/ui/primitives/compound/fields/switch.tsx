import React from 'react';

import { Text } from 'components/ui/primitives/atoms/text';
import { AtomsFields } from 'components/ui/primitives/atoms/fields';

import { cn } from 'utils';

type SwitchProps = React.ComponentProps<typeof AtomsFields.Switch> & {
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
      <AtomsFields.Switch {...rest} />

      <Text.Label>{label}</Text.Label>
    </div>
  );
}
