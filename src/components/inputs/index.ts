import { Inputs } from 'types';

import { Input } from './input';
import { Switch } from './switch';
import { Select } from './select';

const inputMap = {
  [Inputs.TEXT]: Input,
  [Inputs.SWITCH]: Switch,
  [Inputs.SELECT]: Select,
};

export { inputMap };
