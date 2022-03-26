import { Inputs } from 'types';

import { Input } from './input';
import { Switch } from './switch';
import { Select } from './select';
import { SimpleInput } from './simple-input';

const inputMap = {
  [Inputs.TEXT]: Input,
  [Inputs.SWITCH]: Switch,
  [Inputs.SELECT]: Select,
};

export { SimpleInput, inputMap };
