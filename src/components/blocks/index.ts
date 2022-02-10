import { Blocks } from 'types';

import { BaseBlock } from './base';
import { TextBlock } from './text';

const blockTypes = {
  [Blocks.TEXT]: TextBlock,
};

export { BaseBlock, blockTypes };
