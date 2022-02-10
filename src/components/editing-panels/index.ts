import { Blocks } from 'types';

import { StatsEditPanel } from './stats';
import { DefaultEditPanel } from './default';

const editingPanels = {
  [Blocks.STATS]: StatsEditPanel,
  default: DefaultEditPanel,
};

export { editingPanels };
