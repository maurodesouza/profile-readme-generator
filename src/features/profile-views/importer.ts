import { CanvasSection, Sections } from 'types';
import { v4 as uuid } from 'uuid';
import type { Element } from 'hast';
import { defaultProfileViewsSectionConfig } from './default-config';
import { deepCopy } from 'utils/deepCopy';

const _processGetLoliParams = (
  params: URLSearchParams,
  defaultConfig: any
): any => {
  defaultConfig['padding'] = parseInt(params.get('padding') || '7', 10);
  defaultConfig['offset'] = parseInt(params.get('offset') || '0', 10);
  defaultConfig['scale'] = parseFloat(params.get('scale') || '1');
  defaultConfig['align'] = params.get('align') || 'top';
  defaultConfig['pixelated'] = params.get('pixelated') || '1';
  defaultConfig['darkmode'] = params.get('darkmode') || 'auto';
  defaultConfig['theme'] = params.get('theme') || 'gelbooru';

  return defaultConfig;
};

const _processLaobiParams = (
  params: URLSearchParams,
  defaultConfig: any
): any => {
  defaultConfig['left_color'] = params.get('left_color') || '';
  defaultConfig['right_color'] = params.get('right_color') || '';
  defaultConfig['left_text'] = params.get('left_text') || undefined;

  return defaultConfig;
};

const profileViewsImporter = (
  profileViewsElement: Element
): CanvasSection | null => {
  let images = [];

  if (profileViewsElement.tagName === 'div') {
    images = profileViewsElement.children.filter(
      child =>
        child.type === 'element' &&
        child.tagName.toLowerCase() === 'img' &&
        child.properties['src']
    );
  } else {
    images = [profileViewsElement];
  }

  if (images.length === 0) return null;

  const defaultConfig = deepCopy(defaultProfileViewsSectionConfig);

  const image = images[0] as Element;
  const src: string = image.properties['src'] as string;
  const paramsString = src.split('?')[1] || '';
  const params = new URLSearchParams(paramsString);

  if (src.includes('getloli')) {
    const getLoliConfig = _processGetLoliParams(
      params,
      defaultConfig.props.content.views['getloli']
    );
    defaultConfig.props.content.views['getloli'] = getLoliConfig;
  } else if (src.includes('laobi')) {
    const laobiConfig = _processLaobiParams(
      params,
      defaultConfig.props.content.views['laobi']
    );
    defaultConfig.props.content.views['laobi'] = laobiConfig;
  }

  defaultConfig.props.content.provider = src.includes('getloli')
    ? 'getloli'
    : 'laobi';
  defaultConfig.props.styles.float =
    profileViewsElement.properties['align'] || 'none';

  return {
    id: uuid(),
    type: Sections.PROFILE_VIEWS,
    ...defaultConfig,
  };
};

export { profileViewsImporter };
