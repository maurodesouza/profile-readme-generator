import { object } from '#/utils/object';
import { CanvasSection, Sections } from '#/types';
import { defaultImageSectionConfig } from './default-config';
import { v4 as uuid } from 'uuid';
import type { Element } from 'hast';


const imageImporter = (imageElement: Element): CanvasSection | null => {
  const defaultConfig = object.deepCopy(defaultImageSectionConfig);

  defaultConfig.props.styles.align = imageElement.properties?.align || 'center';

  if (imageElement.tagName === 'img') {
    defaultConfig.props.styles.float = imageElement.properties?.align || 'none';
    defaultConfig.props.styles.height = imageElement.properties?.height || 200;
    defaultConfig.props.content.url = imageElement.properties?.src || '';
  } else if (imageElement.tagName === 'div') {
    const image = imageElement.children.find(child => {
      return (child as Element).tagName === 'img';
    }) as Element;
    defaultConfig.props.styles.height = image.properties?.height || 200;
    defaultConfig.props.content.url = image.properties?.src || '';
  } else {
    return null;
  }

  return {
    id: uuid(),
    type: Sections.IMAGE,
    ...defaultConfig,
  };
};

export { imageImporter };
