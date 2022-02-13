import { BaseSection } from './base';

import { StatsSection } from './stats';
import { TechsSections } from './techs';

import { Sections } from 'types';

const sectionMap = {
  [Sections.STATS]: StatsSection,
  [Sections.TECHS]: TechsSections,
};

export { BaseSection, sectionMap };
