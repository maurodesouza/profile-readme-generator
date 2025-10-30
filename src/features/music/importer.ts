import { CanvasSection, Sections } from 'types';
import { v4 as uuid } from 'uuid';
import type { Element } from 'hast';
import { defaultMusicSectionConfig } from './default-config';
import { deepCopy } from 'utils/deepCopy';

const _processCurrentMusic = (element: Element, currentConfig: any): any => {
  const src = element.properties.src as string;
  const urlParams = new URLSearchParams(src.split('?')[1]);
  const url = src.split('?')[0];

  currentConfig['itstommi']['url'] = url;
  currentConfig['itstommi']['props']['theme'] =
    urlParams.get('theme') || 'dark';
  currentConfig['itstommi']['props']['spin'] =
    urlParams.get('spin') === 'true' || false;
  currentConfig['itstommi']['props']['scan'] =
    urlParams.get('scan') === 'true' || false;
  currentConfig['itstommi']['props']['rainbow'] =
    urlParams.get('rainbow') === 'true' || false;

  currentConfig['novatorem']['url'] = url;

  return currentConfig;
};

const _processRecentMusic = (element: Element, currentConfig: any): any => {
  const href = element.properties.href as string;

  currentConfig['user'] = href.split('user/')[1];

  const image = element.children.find(
    child => child.type === 'element'
  ) as Element;
  const src = image.properties.src as string;

  const urlParams = new URLSearchParams(src.split('?')[1]);
  currentConfig['count'] = urlParams.get('count') || 5;
  currentConfig['unique'] = urlParams.get('unique') === 'true' || false;

  return currentConfig;
};

const musicImporter = (musicDiv: Element): CanvasSection | null => {
  const defaultConfig = deepCopy(defaultMusicSectionConfig);

  if (musicDiv.children.length === 0) return null;

  const firstChild = musicDiv.children.find(
    child => child.type === 'element'
  ) as Element;

  if (firstChild.tagName === 'img') {
    const currentConfig = _processCurrentMusic(
      firstChild,
      defaultConfig.props.content['currently']
    );
    defaultConfig.props.content['type'] = 'currently';
    defaultConfig.props.content['currently'] = currentConfig;
  } else if (firstChild.tagName === 'a') {
    const recentConfig = _processRecentMusic(
      firstChild,
      defaultConfig.props.content['recently']
    );
    defaultConfig.props.content['type'] = 'recently';
    defaultConfig.props.content['recently'] = recentConfig;
  } else {
    return null;
  }

  defaultConfig.props.styles.align = musicDiv.properties['align'] || 'center';

  return {
    id: uuid(),
    type: Sections.MUSIC,
    ...defaultConfig,
  };
};

export { musicImporter };
