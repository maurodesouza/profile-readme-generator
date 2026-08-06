import { config } from '#/config';
import { object } from '#/utils/object';

const { badgeBaseUrl, iconBaseUrl } = config.general.urls.sections.socials;

export function getSocialImg(
  type: 'icon' | 'badge',
  social: string,
  props: Record<string, unknown>
) {
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

  return `${badgeBaseUrl}?${object.toQueryParams(
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
}
