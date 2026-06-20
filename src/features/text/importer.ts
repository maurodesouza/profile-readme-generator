import type { Element, Text } from 'hast';
import { CanvasSection, Sections } from 'types';
import { v4 as uuid } from 'uuid';
import { defaultTextSectionConfig } from './default-config';
import { deepCopy } from 'utils/deepCopy';

const textImporter = (textElement: Element): CanvasSection | null => {
  const defaultConfig = deepCopy(defaultTextSectionConfig);

  if (textElement.children.length === 0) return null;

  defaultConfig.props.content.as = textElement.tagName.toLowerCase();
  defaultConfig.props.content.text = (textElement.children[0] as Text)
    .value as string;
  defaultConfig.props.styles.align = textElement.properties['align'] as string;

  return {
    id: uuid(),
    type: Sections.TEXT,
    ...defaultConfig,
  };
};

export { textImporter };
