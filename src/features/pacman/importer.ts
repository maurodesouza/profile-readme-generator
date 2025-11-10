import { CanvasSection, Sections } from 'types';
import { defaultPacmanSectionConfig } from './default-config';
import { v4 as uuid } from 'uuid';
import type { Element } from 'hast';
import { deepCopy } from 'utils/deepCopy';

const pacmanImporter = (_: Element): CanvasSection | null => {
  const defaultConfig = deepCopy(defaultPacmanSectionConfig);

  return {
    id: uuid(),
    type: Sections.PACMAN,
    ...defaultConfig,
  };
};

export { pacmanImporter };
