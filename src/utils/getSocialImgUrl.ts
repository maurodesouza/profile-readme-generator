import { general as generalConfig } from 'app/config/general';
import { objectToQueryParams } from './objectToQueryParams';

const { badgeBaseUrl, iconBaseUrl } = generalConfig.urls.sections.socials;

const getSocialImgUrl = (
  type: 'icon' | 'badge',
  social: string,
  props: Record<string, unknown>
) => {
  const { icon, ...badgeProps } = props;

  if (type === 'icon') return `${iconBaseUrl}/${social}/${icon}.svg`;

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

  return `${badgeBaseUrl}?${objectToQueryParams(
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
