import { object } from '#/utils/object';
import { CanvasSection, Sections } from '#/types';
import { defaultSnakeSectionConfig } from './default-config';
import { v4 as uuid } from 'uuid';
import type { Element } from 'hast';


const snakeImporter = (_: Element): CanvasSection | null => {
  const defaultConfig = object.deepCopy(defaultSnakeSectionConfig);

  return {
    id: uuid(),
    type: Sections.SNAKE,
    ...defaultConfig,
  };
};

export { snakeImporter };
