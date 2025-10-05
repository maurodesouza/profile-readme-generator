import { config } from 'config';

const { getloli, laobi } = config.general.urls.sections.profileViews;

const urls = {
  laobi: (username: string) => `${laobi}?page_id=${username}.${username}&`,
  getloli: (username: string) => `${getloli}/@:${username}?`,
};

function getProfileViewsUrl(type: keyof typeof urls, username: string) {
  return urls[type](username);
}

export { getProfileViewsUrl };
