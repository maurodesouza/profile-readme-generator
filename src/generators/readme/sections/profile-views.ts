import { getProfileViewsUrl, objectToQueryParams } from 'utils';

type Content = {
  type: Parameters<typeof getProfileViewsUrl>[0];
  props: Record<string, unknown>;
};

type Styles = {
  align: 'left' | 'center' | 'right';
  float: 'none' | 'right' | 'left';
};

type GenerateProfileViewsSectionArgs = {
  content: Content;
  styles: Styles;
};

const generateProfileViewsSection = ({
  content,
  styles,
}: GenerateProfileViewsSectionArgs) => {
  const { type, props } = content;
  const { align, float } = styles;

  const url = getProfileViewsUrl(type, 'maurodesouza');
  const fullUrl = `${url}${type === 'badge' ? objectToQueryParams(props) : ''}`;

  const hasFloat = float !== 'none';
  const floatStyle = `align="${float}" `;

  return `
    ${!hasFloat ? `<div align="${align}"` : ''}
      <img ${hasFloat ? floatStyle : ''}src="${fullUrl}" />
    ${!hasFloat ? '</div>' : ''}
  `.trim();
};

export { generateProfileViewsSection };
