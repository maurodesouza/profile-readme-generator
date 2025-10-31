import { config } from 'config';

const {
  statsBaseUrl,
  languagesBaseUrl,
  streakBaseUrl,
  trophiBaseUrl,
  activityGraphBaseUrl,
} = config.general.urls.sections.stats;

const urls = (value: string) => ({
  stats: `${statsBaseUrl}${value}`,
  languages: `${languagesBaseUrl}${value}`,
  streak: `${streakBaseUrl}?user=${value}`,
  trophy: `${trophiBaseUrl}?username=${value}`,
  'activity-graph': `${activityGraphBaseUrl}?username=${value}`,
});

const getStatsUrl = (type: keyof typeof urls, github: string) =>
  `${urls(github)[type]}`;

export { getStatsUrl };
