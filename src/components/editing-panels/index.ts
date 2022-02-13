import { DefaultEditPanel } from './default';

import { StatsEditPanel } from './stats';
import { TechsEditPanel } from './techs';

import { Sections } from 'types';

const editingPanels = {
  default: DefaultEditPanel,
  [Sections.STATS]: StatsEditPanel,
  [Sections.TECHS]: TechsEditPanel,
};

export { editingPanels };
