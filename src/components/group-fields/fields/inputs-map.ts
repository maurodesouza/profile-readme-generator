import { JSX } from 'react';

import { Inputs } from 'types';
import { GFTextField } from './text';
import { GFSwitchField } from './switch';
import { GFSelectField } from './select';

export type GFCommonProps<T = any> = {
  value: T;
  label: string;
  error?: string;
  onChange: (value: T) => void;
};

type InputMap = Record<Inputs, (props: GFCommonProps) => JSX.Element>;

export const inputMap: InputMap = {
  [Inputs.TEXT]: GFTextField,
  [Inputs.SWITCH]: GFSwitchField,
  [Inputs.SELECT]: GFSelectField,
};
