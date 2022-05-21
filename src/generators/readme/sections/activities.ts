import { getActivitiesUrl } from 'utils';

type Content = {
  type: Parameters<typeof getActivitiesUrl>[0];
  [key: string]: unknown;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type GenerateActivitiesSectionArgs = {
  content: Content;
  styles: Styles;
};

const generateActivitiesSection = ({
  content,
  styles,
}: GenerateActivitiesSectionArgs) => {
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

export { generateActivitiesSection };
