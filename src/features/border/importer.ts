import { CanvasSection, Sections } from 'types';
import { defaultImageSectionConfig } from './default-config';
import { v4 as uuid } from 'uuid';
import type { Element } from 'hast';
import { deepCopy } from 'utils/deepCopy';

const _updateBorderConfig = (params: URLSearchParams, config: any): any => {
  config['type'] = params.get('type') || config['type'];
  config['height'] = params.get('height')
    ? parseInt(params.get('height') as string, 10)
    : config['height'];
  config['section'] = params.get('section') || config['section'];
  config['reversal'] = params.get('reversal') === 'true' || false;
  config['color'] = {
    type: params.get('color') || config['color']['type'],
    theme: params.get('theme') || config['color']['theme'],
  };
  config['text'] = params.get('text') || config['text'];
  config['fontSize'] = params.get('fontSize')
    ? parseInt(params.get('fontSize') as string, 10)
    : config['fontSize'];
  config['fontColor'] = params.get('fontColor') || config['fontColor'];
  config['fontAlign'] = params.get('fontAlign')
    ? parseInt(params.get('fontAlign') as string, 10)
    : config['fontAlign'];
  config['fontAlignY'] = params.get('fontAlignY')
    ? parseInt(params.get('fontAlignY') as string, 10)
    : config['fontAlignY'];
  config['rotate'] = params.get('rotate')
    ? parseInt(params.get('rotate') as string, 10)
    : config['rotate'];
  config['stroke'] = params.get('stroke') || config['stroke'];
  config['strokeWidth'] = params.get('strokeWidth')
    ? parseInt(params.get('strokeWidth') as string, 10)
    : config['strokeWidth'];
  config['animation'] = params.get('animation') || config['animation'];
  config['desc'] = params.get('desc') || config['desc'];
  config['descSize'] = params.get('descSize')
    ? parseInt(params.get('descSize') as string, 10)
    : config['descSize'];
  config['descAlign'] = params.get('descAlign')
    ? parseInt(params.get('descAlign') as string, 10)
    : config['descAlign'];
  config['descAlignY'] = params.get('descAlignY')
    ? parseInt(params.get('descAlignY') as string, 10)
    : config['descAlignY'];
  config['textBg'] = params.get('textBg') === 'true' || false;

  return config;
};

const borderImporter = (borderElement: Element): CanvasSection | null => {
  const defaultConfig = deepCopy(defaultImageSectionConfig);

  if (borderElement.children.length === 0) return null;

  const image = borderElement.children.find(
    child => child.type === 'element' && child.tagName === 'img'
  ) as Element;

  if (!image || !image.properties || !image.properties.src) return null;

  const src = image.properties.src as string;
  const url = new URL(src);
  const params = url.searchParams;

  defaultImageSectionConfig.props.content.borders['capsule-render'] =
    _updateBorderConfig(
      params,
      defaultConfig.props.content.borders['capsule-render']
    );

  return {
    id: uuid(),
    type: Sections.BORDER,
    ...defaultConfig,
  };
};

export { borderImporter };
