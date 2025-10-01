import { Params, Settings } from 'types';
import { getProfileViewsUrl, objectToQueryParams } from 'utils';

type Providers = Parameters<typeof getProfileViewsUrl>[0];

type Views = {
  [key in Providers]: Params;
};

type Content = {
  provider: Parameters<typeof getProfileViewsUrl>[0];
  views: Views;
};

type Styles = {
  align: 'left' | 'center' | 'right';
  float: 'none' | 'right' | 'left';
};

type ProfileViewsSectionParserArgs = {
  content: Content;
  styles: Styles;
};

const profileViewsSectionParser = (
  { content, styles }: ProfileViewsSectionParserArgs,
  settings: Settings
) => {
  const { provider, views } = content;
  const { align, float } = styles;

  const url = getProfileViewsUrl(provider, settings.user.github as string);
  const fullUrl = `${url}${objectToQueryParams(views[provider])}`;

  const hasFloat = float !== 'none';
  const floatStyle = `align="${float}" `;

  return `
    ${!hasFloat ? `<div align="${align}">` : ''}
      <img ${hasFloat ? floatStyle : ''}src="${fullUrl}" />
    ${!hasFloat ? '</div>' : ''}
  `;
};

export { profileViewsSectionParser };
