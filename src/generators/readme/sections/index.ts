import { Sections } from 'types';

import { generateImageSection } from './image';

const sectionsGeneratorMap = {
  [Sections.IMAGE]: generateImageSection,
};

export { sectionsGeneratorMap };
