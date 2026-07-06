import { Input as AtomInput } from '#/components/atoms/field-input';
import { Textarea as AtomTextarea } from '#/components/atoms/field-textarea';
import { Switch as AtomSwitch } from '#/components/atoms/field-switch';

import { Input as CompoundInput } from '#/components/molecules/field-input';
import { Textarea as CompoundTextarea } from '#/components/molecules/field-textarea';
import { Switch as CompoundSwitch } from '#/components/molecules/field-switch';
import { Combobox } from '#/components/molecules/field-combobox';

export const Fields = {
  Atoms: {
    Input: AtomInput,
    Textarea: AtomTextarea,
    Switch: AtomSwitch,
  },
  Compound: {
    Input: CompoundInput,
    Textarea: CompoundTextarea,
    Switch: CompoundSwitch,
    Combobox,
  },
};
