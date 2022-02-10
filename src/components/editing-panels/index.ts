import { Sections } from 'types';

import { StatsEditPanel } from './stats';
import { DefaultEditPanel } from './default';

const editingPanels = {
  [Sections.STATS]: StatsEditPanel,
  default: DefaultEditPanel,
};

export { editingPanels };
