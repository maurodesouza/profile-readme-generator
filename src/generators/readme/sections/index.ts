import { Sections } from 'types';

import { generateImageSection } from './image';
import { generateStatsSection } from './stats';
import { generateTechsSection } from './techs';
import { generateSocialsSection } from './socials';
import { generateProfileViewsSection } from './profile-views';

const sectionsGeneratorMap = {
  [Sections.IMAGE]: generateImageSection,
  [Sections.STATS]: generateStatsSection,
  [Sections.TECHS]: generateTechsSection,
  [Sections.SOCIALS]: generateSocialsSection,
  [Sections.PROFILE_VIEWS]: generateProfileViewsSection,
};

export { sectionsGeneratorMap };
