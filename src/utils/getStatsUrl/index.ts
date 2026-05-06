import { config } from 'config';

const { imageBaseUrl, streakBaseUrl, trophyBaseUrl, activityGraphBaseUrl } =
  config.general.urls.sections.stats;

const urls = (value: string) => ({
  stats: `${imageBaseUrl}?username=${value}`,
  languages: `${imageBaseUrl}/top-langs?username=${value}`,
  streak: `${streakBaseUrl}?user=${value}`,
  trophy: `${trophyBaseUrl}?username=${value}`,
  'activity-graph': `${activityGraphBaseUrl}?username=${value}`,
});

const getStatsUrl = (type: keyof typeof urls, github: string) =>
  `${urls(github)[type]}`;

export { getStatsUrl };
