import { CanvasSection, Sections } from '#/types';
import { defaultActivitiesSectionConfig } from './default-config';
import { v4 as uuid } from 'uuid';
import type { Element } from 'hast';


const activitiesImporter = (activityDiv: Element): CanvasSection | null => {
  const defaultConfig = (structuredClone(defaultActivitiesSectionConfig) as any);

  // NOTE: currently only Medium posts supported
  if (activityDiv.children.length === 0) return null;

  const posts = activityDiv.children.filter(
    child => child.type === 'element' && child.tagName === 'a'
  ) as Element[];

  const href = posts[0].properties.href as string;
  const usernamePart = href.split('@')[1];
  const username = usernamePart.split('/')[0];

  defaultConfig.props.content.username = username;
  defaultConfig.props.content.limit = posts.length;
  defaultConfig.props.styles.align =
    activityDiv.properties['align'] || 'center';

  return {
    id: uuid(),
    type: Sections.ACTIVITIES,
    ...defaultConfig,
  };
};

export { activitiesImporter };
