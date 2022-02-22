import { Sections } from 'types';

import { generateImageSection } from './image';
import { generateStatsSection } from './stats';

const sectionsGeneratorMap = {
  [Sections.IMAGE]: generateImageSection,
  [Sections.STATS]: generateStatsSection,
};

export { sectionsGeneratorMap };
