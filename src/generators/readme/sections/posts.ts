import { getPostsUrl } from 'utils';

type Content = {
  type: Parameters<typeof getPostsUrl>[0];
  [key: string]: unknown;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type GeneratePostsSectionArgs = {
  content: Content;
  styles: Styles;
};

const generatePostsSection = ({
  content,
  styles,
}: GeneratePostsSectionArgs) => {
  const { type, ...rest } = content;
  const { align } = styles;

  const url = getPostsUrl(type, rest);
  const alt = `Layout with last ${type} posts`;

  return `
   <div align="${align}">
      <img src="${url}" alt="${alt}" />
   </div>
  `;
};

export { generatePostsSection };
