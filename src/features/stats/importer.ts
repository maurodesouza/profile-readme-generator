import { CanvasSection, Sections } from 'types';
import type { Element } from 'hast';
import { v4 as uuid } from 'uuid';
import { general } from 'config/general';
import { defaultStatsSectionConfig } from './default-config';
import { deepCopy } from 'utils/deepCopy';

const _extractStatsSettings = (image: Element, config: any): any => {
  const src: string = image.properties['src'] as string;
  const paramsString = src.split('?')[1] || '';
  const params = new URLSearchParams(paramsString);

  config['height'] = params.get('hide_title') === 'true' || false;
  config['hide_rank'] = params.get('hide_rank') === 'true' || false;
  config['show_icons'] = params.get('show_icons') === 'true' || true;
  config['include_all_commits'] =
    params.get('include_all_commits') === 'true' || true;
  config['count_private'] = params.get('count_private') === 'true' || true;
  config['disable_animations'] =
    params.get('disable_animations') === 'true' || false;
  config['theme'] = params.get('theme') || 'dracula';
  config['locale'] = params.get('locale') || 'en';
  config['hide_border'] = params.get('hide_border') === 'true' || false;
  config['order'] = params.get('order') || 1;
  config['show'] = true;
  config['height'] = (image.properties['height'] as number) || 150;

  return config;
};

const _extractLanguagesSettings = (image: Element, config: any): any => {
  const src: string = image.properties['src'] as string;
  const paramsString = src.split('?')[1] || '';
  const params = new URLSearchParams(paramsString);

  config['hide_title'] = params.get('hide_title') === 'true' || false;
  config['theme'] = params.get('theme') || 'dracula';
  config['locale'] = params.get('locale') || 'en';
  config['hide_border'] = params.get('hide_border') === 'true' || false;
  config['order'] = params.get('order') || 1;
  config['layout'] = params.get('layout') || 'compact';
  config['card_width'] = params.get('card_width') || 320;
  config['langs_count'] = params.get('langs_count') || 5;
  config['show'] = true;
  config['height'] = (image.properties['height'] as number) || 150;

  return config;
};

const _extractStreakSettings = (image: Element, config: any): any => {
  const src: string = image.properties['src'] as string;
  const paramsString = src.split('?')[1] || '';
  const params = new URLSearchParams(paramsString);

  config['theme'] = params.get('theme') || 'dracula';
  config['locale'] = params.get('locale') || 'en';
  config['hide_border'] = params.get('hide_border') === 'true' || false;
  config['order'] = params.get('order') || 1;
  config['mode'] = params.get('mode') || 'daily';
  config['border_radius'] = params.get('border_radius') || 5;
  config['date_format'] = params.get('date_format') || '';
  config['show'] = true;
  config['height'] = (image.properties['height'] as number) || 150;

  return config;
};

const _extractTrophySettings = (image: Element, config: any): any => {
  const src: string = image.properties['src'] as string;
  const paramsString = src.split('?')[1] || '';
  const params = new URLSearchParams(paramsString);

  config['theme'] = params.get('theme') || 'dracula';
  config['order'] = params.get('order') || 1;
  config['column'] = params.get('column') || -1;
  config['row'] = params.get('row') || 1;
  config['margin-w'] = params.get('margin-w') || 8;
  config['margin-h'] = params.get('margin-h') || 8;
  config['no-bg'] = params.get('no-bg') === 'true' || false;
  config['n-frame'] = params.get('no-frame') === 'true' || false;
  config['show'] = true;

  return config;
};

const _extractActivityGraphSettings = (image: Element, config: any): any => {
  const src: string = image.properties['src'] as string;
  const paramsString = src.split('?')[1] || '';
  const params = new URLSearchParams(paramsString);

  config['theme'] = params.get('theme') || 'dracula';
  config['order'] = params.get('order') || 1;
  config['radius'] = params.get('radius') || 16;
  config['area'] = params.get('area') === 'true' || false;
  config['height'] = (image.properties['height'] as number) || 150;
  config['show'] = true;

  return config;
};

const statsImporter = (statsDiv: Element): CanvasSection | null => {
  const images = statsDiv.children.filter(
    child =>
      child.type === 'element' &&
      child.tagName.toLowerCase() === 'img' &&
      child.properties['src'] &&
      child.properties['alt']
  );

  if (images.length === 0) return null;

  const defaultConfig = deepCopy(defaultStatsSectionConfig);
  const urls = general.urls.sections.stats;

  for (let image of images) {
    image = image as Element;
    const src: string = image.properties['src'] as string;
    const foundImageUrl = Object.entries(urls).find(([, baseUrl]) =>
      src.startsWith(baseUrl as string)
    );

    if (!foundImageUrl) continue;

    const [, baseUrl] = foundImageUrl;

    switch (baseUrl) {
      case urls.statsBaseUrl:
        defaultConfig.props.content.graphs['stats'] = _extractStatsSettings(
          image,
          defaultConfig.props.content.graphs['stats']
        );
        break;
      case urls.languagesBaseUrl:
        defaultConfig.props.content.graphs['languages'] =
          _extractLanguagesSettings(
            image,
            defaultConfig.props.content.graphs['languages']
          );
        break;
      case urls.streakBaseUrl:
        defaultConfig.props.content.graphs['streak'] = _extractStreakSettings(
          image,
          defaultConfig.props.content.graphs['streak']
        );
        break;
      case urls.trophiBaseUrl:
        defaultConfig.props.content.graphs['trophy'] = _extractTrophySettings(
          image,
          defaultConfig.props.content.graphs['trophy']
        );
        break;
      case urls.activityGraphBaseUrl:
        defaultConfig.props.content.graphs['activity-graph'] =
          _extractActivityGraphSettings(
            image,
            defaultConfig.props.content.graphs['activity-graph']
          );
        break;
    }
  }

  defaultConfig.props.styles.align = statsDiv.properties['align'] || 'center';

  return {
    id: uuid(),
    type: Sections.STATS,
    ...defaultConfig,
  };
};

export { statsImporter };
