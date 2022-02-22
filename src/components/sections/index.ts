import { BaseSection } from './base';

import { StatsSection } from './stats';
import { TechsSection } from './techs';
import { TextSection } from './text';

import { ImageSection } from './image';
import { SocialsSection } from './socials';
import { ProfileViewsSection } from './profile-views';

import { Sections } from 'types';

const sectionMap = {
  [Sections.STATS]: StatsSection,
  [Sections.TECHS]: TechsSection,
  [Sections.TEXT]: TextSection,
  [Sections.PROFILE_VIEWS]: ProfileViewsSection,
  [Sections.IMAGE]: ImageSection,
  [Sections.SOCIALS]: SocialsSection,
};

export { BaseSection, sectionMap };
