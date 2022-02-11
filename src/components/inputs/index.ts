import { Inputs } from 'types';

import { Input } from './input';
import { Select } from './select';

const inputMap = {
  [Inputs.TEXT]: Input,
  [Inputs.SELECT]: Select,
};

export { inputMap };
