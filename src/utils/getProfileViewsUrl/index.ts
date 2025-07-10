import { config } from 'config';

const { badgeBaseUrl } = config.general.urls.sections.profileViews;

const urls = {
  badge: (username: string) =>
    `${badgeBaseUrl}?page_id=${username}.${username}&`,
};

const getProfileViewsUrl = (type: keyof typeof urls, username: string) =>
  urls[type](username);

export { getProfileViewsUrl };
