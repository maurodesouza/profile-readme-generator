import type { Element } from 'hast';
import { tech_icons } from 'resources';
import { CanvasSection, Sections } from 'types';
import { deepCopy } from 'utils/deepCopy';
import { v4 as uuid } from 'uuid';
import { defaultTechsSectionConfig } from './default-config';

const techsImporter = (techsDiv: Element): CanvasSection | null => {
  const defaultConfig = deepCopy(defaultTechsSectionConfig);

  const images = techsDiv.children.filter(
    child =>
      child.type === 'element' &&
      child.tagName.toLowerCase() === 'img' &&
      child.properties['src'] &&
      child.properties['alt']
  );

  const firstSpacingImage = techsDiv.children.find(
    child =>
      child.type === 'element' &&
      child.tagName.toLowerCase() === 'img' &&
      !child.properties['src'] &&
      !child.properties['alt']
  ) as Element;

  if (images.length === 0) return null;

  const firstImage = images[0] as Element;
  defaultConfig.props.content.styles.height = firstImage.properties[
    'height'
  ] as number;
  defaultConfig.props.styles.align = techsDiv.properties['align'] as string;
  defaultConfig.props.styles.spacing =
    (firstSpacingImage?.properties?.['height'] as number) || 12;

  const techIcons: any = {};
  for (let image of images) {
    image = image as Element;
    const logo = (image!.properties!['alt'] as string)!.split(' ')[0];
    const data: any = tech_icons.find((icon: any) => icon.name === logo);
    if (!data) continue;
    const src = image!.properties!['src'] as string;
    const currentProvider = data['available_providers'].find((p: string) =>
      src.includes(p.replace('_', ''))
    );
    data['currentProvider'] = currentProvider;
    data['config'] = {};
    techIcons[logo] = data;
  }

  defaultConfig.props.content.icons = techIcons;

  return {
    id: uuid(),
    type: Sections.TECHS,
    ...defaultConfig,
  };
};

export { techsImporter };
