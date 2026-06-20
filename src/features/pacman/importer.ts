import { CanvasSection, Sections } from 'types';
import { defaultPacmanSectionConfig } from './default-config';
import { v4 as uuid } from 'uuid';
import type { Element } from 'hast';
import { deepCopy } from 'utils/deepCopy';

const pacmanImporter = (pictureElement: Element): CanvasSection | null => {
  const defaultConfig = deepCopy(defaultPacmanSectionConfig);

  // Find the img element within the picture
  const imgElement = pictureElement.children.find(
    child =>
      child.type === 'element' &&
      child.tagName.toLowerCase() === 'img' &&
      child.properties['src']
  ) as Element;

  if (!imgElement) return null;

  const src: string = imgElement.properties['src'] as string;

  // Extract game type from query params
  const url = new URL(src);
  const game = url.searchParams.get('game');

  if (game) {
    defaultConfig.props.game = game;
  }

  return {
    id: uuid(),
    type: Sections.PACMAN,
    ...defaultConfig,
  };
};

export { pacmanImporter };
