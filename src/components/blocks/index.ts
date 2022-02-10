import { Blocks } from 'types';

import { BaseBlock } from './base';
import { StatsBlock } from './stats';

const blockTypes = {
  [Blocks.STATS]: StatsBlock,
};

export { BaseBlock, blockTypes };
