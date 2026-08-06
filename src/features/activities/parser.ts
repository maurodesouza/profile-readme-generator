import { url, ActivityUrlType } from '#/utils/url';
import { Sections } from '#/types';



type Content = {
  type: Parameters<typeof url.getActivities>[0];
  [key: string]: unknown;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type ActivitiesSectionParserArgs = {
  content: Content;
  styles: Styles;
};

const _handleDefaultActivities = (type: ActivityUrlType, align: string) => {
  const srcUrl = url.getActivities(type);
  const alt = `Layout with last ${type} posts`;

  return `
   <div align="${align}">
      <img src="${srcUrl}" alt="${alt}" />
   </div>
  `;
};

const _handleMediumPosts = (
  type: ActivityUrlType,
  rest: Record<string, unknown>,
  align: string
) => {
  const baseUrl = url.getActivities(type);
  const count = (rest.limit as number) || 3;
  const username = rest.username as string;

  let result = `<div data-importer="${Sections.ACTIVITIES}" align="${align}" style="width: 100%">`;

  for (let i = 0; i < count; i++) {
    const srcUrl = `${baseUrl}/@${username}/${i}`;
    const alt = `Medium post ${i + 1}`;

    result += `
      <a target="_blank" href="${srcUrl}">
        <img style="width: 100%" src="${srcUrl}" alt="${alt}" />
      </a>
    `;
  }

  result += `</div>`;
  return result;
};

const activityParsers: any = {
  medium: _handleMediumPosts,
};

const activitiesSectionParser = ({
  content,
  styles,
}: ActivitiesSectionParserArgs) => {
  const { type, ...rest } = content;
  const { align } = styles;

  if (Object.keys(activityParsers).includes(type)) {
    return activityParsers[type](type, rest, align);
  }

  return _handleDefaultActivities(type, align);
};

export { activitiesSectionParser };
