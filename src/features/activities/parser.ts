import { getActivitiesUrl } from 'utils';

type Content = {
  type: Parameters<typeof getActivitiesUrl>[0];
  [key: string]: unknown;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type ActivitiesSectionParserArgs = {
  content: Content;
  styles: Styles;
};

const activitiesSectionParser = ({
  content,
  styles,
}: ActivitiesSectionParserArgs) => {
  const { type, ...rest } = content;
  const { align } = styles;

  const url = getActivitiesUrl(type, rest);
  const alt = `Layout with last ${type} posts`;

  return `
   <div align="${align}">
      <img src="${url}" alt="${alt}" />
   </div>
  `;
};

export { activitiesSectionParser };
