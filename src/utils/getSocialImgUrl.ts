import { objectToQueryParams } from './objectToQueryParams';

const getSocialImgUrl = (
  type: 'icon' | 'badge',
  social: string,
  props: Record<string, unknown>
) => {
  const baseIconUrl =
    'https://raw.githubusercontent.com/maurodesouza/a/master/icons/social';
  const baseBagdeUrl = 'https://img.shields.io/static/v1';

  const { icon, ...badgeProps } = props;

  if (type === 'icon') return `${baseIconUrl}/${social}/${icon}.svg`;

  const capitalizedSocial = social.charAt(0).toUpperCase() + social.slice(1); // Capitalize

  const {
    message = capitalizedSocial,
    logo = social,
    label = '',
    logoColor = 'white',
    labelColor = '',
    color = '000',
    style = 'for-the-badge',
  } = badgeProps;

  return `${baseBagdeUrl}?${objectToQueryParams(
    {
      message,
      logo,
      label,
      color,
      logoColor,
      labelColor,
      style,
    },
    false
  )}`;
};

export { getSocialImgUrl };
