import { BaseSection } from './base';

import { StatsSection } from './stats';
import { TechsSections } from './techs';
import { ImageSection } from './image';
import { ProfileViewsSection } from './profile-views';

import { Sections } from 'types';

const sectionMap = {
  [Sections.STATS]: StatsSection,
  [Sections.TECHS]: TechsSections,
  [Sections.PROFILE_VIEWS]: ProfileViewsSection,
  [Sections.IMAGE]: ImageSection,
};

export { BaseSection, sectionMap };
