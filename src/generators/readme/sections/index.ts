import { Sections } from 'types';

import { generateTextSection } from './text';
import { generatePostsSection } from './posts';
import { generateSnakeSection } from './snake';
import { generateImageSection } from './image';
import { generateStatsSection } from './stats';
import { generateTechsSection } from './techs';
import { generateSocialsSection } from './socials';
import { generateProfileViewsSection } from './profile-views';

const sectionsGeneratorMap = {
  [Sections.TEXT]: generateTextSection,
  [Sections.SNAKE]: generateSnakeSection,
  [Sections.POSTS]: generatePostsSection,
  [Sections.IMAGE]: generateImageSection,
  [Sections.STATS]: generateStatsSection,
  [Sections.TECHS]: generateTechsSection,
  [Sections.SOCIALS]: generateSocialsSection,
  [Sections.PROFILE_VIEWS]: generateProfileViewsSection,
};

export { sectionsGeneratorMap };
