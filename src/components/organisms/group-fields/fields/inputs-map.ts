import { JSX } from 'react';

import { Inputs } from '#/types';
import { GFTextField } from './text';
import { GFSwitchField } from './switch';
import { GFSelectField } from './select';
import { GFTextAreaField } from './textarea';

export type GFCommonProps<T = unknown> = {
  value: T;
  label: string;
  placeholder?: string;
  error?: string;
  onChange: (value: T) => void;
  'data-testid'?: string;
  'aria-label'?: string;
};

type InputMap = Record<Inputs, (props: GFCommonProps) => JSX.Element>;

export const inputMap: InputMap = {
  [Inputs.TEXT]: GFTextField as unknown as (
    props: GFCommonProps
  ) => JSX.Element,
  [Inputs.SWITCH]: GFSwitchField as unknown as (
    props: GFCommonProps
  ) => JSX.Element,
  [Inputs.SELECT]: GFSelectField as unknown as (
    props: GFCommonProps
  ) => JSX.Element,
  [Inputs.TEXTAREA]: GFTextAreaField as unknown as (
    props: GFCommonProps
  ) => JSX.Element,
};
