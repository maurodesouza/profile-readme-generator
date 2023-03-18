import { general as generalConfig } from 'app/config/general';

const { imageBaseUrl, streakBaseUrl } = generalConfig.urls.sections.stats;

const urls = (value: string) => ({
  stats: `${imageBaseUrl}?username=${value}`,
  languages: `${imageBaseUrl}/top-langs?username=${value}`,
  streak: `${streakBaseUrl}?user=${value}`,
});

const getStatsUrl = (type: keyof typeof urls, github: string) =>
  `${urls(github)[type]}`;

export { getStatsUrl };
