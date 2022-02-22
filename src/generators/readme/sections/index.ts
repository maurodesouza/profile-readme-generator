import { Sections } from 'types';

import { generateImageSection } from './image';
import { generateStatsSection } from './stats';
import { generateProfileViewsSection } from './profile-views';

const sectionsGeneratorMap = {
  [Sections.IMAGE]: generateImageSection,
  [Sections.STATS]: generateStatsSection,
  [Sections.PROFILE_VIEWS]: generateProfileViewsSection,
};

export { sectionsGeneratorMap };
