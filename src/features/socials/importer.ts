import type { Element } from 'hast';
import { social_icons } from 'resources';
import { CanvasSection, Sections } from 'types';
import { deepCopy } from 'utils/deepCopy';
import { v4 as uuid } from 'uuid';
import { defaultSocialsSectionConfig } from './default-config';

const defaultWidth = 52;
const defaultHeight = 40;
const defaultStyle = 'for-the-badge';

const _processBadgeProperties = (params: URLSearchParams): any => {
  return {
    message: params.get('message') || '',
    label: params.get('label') || '',
    color: params.get('color') || undefined,
    logoColor: params.get('logoColor') || undefined,
    labelColor: params.get('labelColor') || undefined,
    style: params.get('style') || 'for-the-badge',
  };
};

const _processImage = (
  image: Element,
  defaultConfig: any,
  logo: string,
  link: string
): any => {
  let result = {};

  const data = deepCopy(social_icons.find(icon => icon.name === logo));
  if (!data) return null;

  result = {
    icon: data!.icons![0],
    ...data!.badge,
    link: link !== '' ? link : undefined,
  };

  defaultConfig.props.content.styles.type = (
    image.properties['src'] as string
  ).includes('shields')
    ? 'badge'
    : 'icon';

  if (defaultConfig.props.content.styles.type === 'badge') {
    const url = new URL(image.properties['src'] as string);
    const params = url.searchParams;
    const badgeSettings = _processBadgeProperties(params);
    result = {
      ...result,
      ...badgeSettings,
    };
  }

  return result;
};

const socialsImporter = (socialsDiv: Element): CanvasSection | null => {
  const defaultConfig = deepCopy(defaultSocialsSectionConfig);

  const children = socialsDiv.children.filter(
    child => child.type === 'element'
  ) as Element[];

  if (children.length === 0) return null;

  let height = defaultHeight;
  let width = defaultWidth;
  let style = defaultStyle;

  const socialIcons: any = {};
  for (let child of children) {
    let link = '';

    if (child.tagName === 'a') {
      const imageChild = child.children.find(
        child => child.type === 'element' && child.tagName === 'img'
      ) as Element;

      if (!imageChild) continue;

      link = child.properties['href'] as string;
      child = imageChild;
    }

    if (child.tagName === 'img') {
      if (!child.properties['src']) continue;

      const logo = (child.properties!['alt'] as string)!.split(' ')[0];
      const socialFromImage = _processImage(child, defaultConfig, logo, link);

      if (socialFromImage === null) continue;

      height = (child.properties['height'] as number) || defaultHeight;
      width = (child.properties['width'] as number) || defaultWidth;
      style = socialFromImage.style;
      delete socialFromImage.style;
      socialIcons[logo] = socialFromImage;
    }
  }

  defaultConfig.props.content.styles.height = height;
  defaultConfig.props.content.styles.width = width;
  defaultConfig.props.styles.align = socialsDiv.properties['align'] as string;
  defaultConfig.props.content.socials = socialIcons;
  defaultConfig.props.content.styles.style = style;

  return {
    id: uuid(),
    type: Sections.SOCIALS,
    ...defaultConfig,
  };
};

export { socialsImporter };
