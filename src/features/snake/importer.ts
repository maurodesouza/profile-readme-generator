import { CanvasSection, Sections } from 'types';
import { defaultSnakeSectionConfig } from './default-config';
import { v4 as uuid } from 'uuid';
import type { Element } from 'hast';
import { deepCopy } from 'utils/deepCopy';

const snakeImporter = (_: Element): CanvasSection | null => {
  const defaultConfig = deepCopy(defaultSnakeSectionConfig);

  return {
    id: uuid(),
    type: Sections.SNAKE,
    ...defaultConfig,
  };
};

export { snakeImporter };
