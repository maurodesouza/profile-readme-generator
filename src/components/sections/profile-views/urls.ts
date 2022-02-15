const urls = {
  badge: (username: string) =>
    `https://visitor-badge.laobi.icu/badge?page_id=${username}.${username}&`,

  default: (username: string) =>
    `https://profile-counter.glitch.me/${username}/count.svg?`,
};

export { urls };
