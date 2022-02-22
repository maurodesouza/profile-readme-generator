const urls = {
  badge: (username: string) =>
    `https://visitor-badge.laobi.icu/badge?page_id=${username}.${username}&`,

  default: (username: string) =>
    `https://profile-counter.glitch.me/${username}/count.svg?`,
};

const getProfileViewsUrl = (type: keyof typeof urls, username: string) =>
  urls[type](username);

export { getProfileViewsUrl };
