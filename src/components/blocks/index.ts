import { Blocks } from 'types';
import { TextBlock } from './text';

const blockTypes = {
  [Blocks.TEXT]: TextBlock,
};

export { blockTypes };
