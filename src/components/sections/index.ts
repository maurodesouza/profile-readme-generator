import { Sections } from 'types';

import { BaseSection } from './base';
import { StatsSection } from './stats';

const sectionMap = {
  [Sections.STATS]: StatsSection,
};

export { BaseSection, sectionMap };
