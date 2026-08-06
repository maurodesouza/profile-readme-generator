import { config } from '#/config';

const { imageBaseUrl, streakBaseUrl, trophyBaseUrl, activityGraphBaseUrl } =
  config.general.urls.sections.stats;

function urls(value: string) {
  return {
    stats: `${imageBaseUrl}?username=${value}`,
    languages: `${imageBaseUrl}/top-langs?username=${value}`,
    streak: `${streakBaseUrl}?user=${value}`,
    trophy: `${trophyBaseUrl}?username=${value}`,
    'activity-graph': `${activityGraphBaseUrl}?username=${value}`,
  };
}

export function getStats(type: keyof typeof urls, github: string) {
  return `${urls(github)[type]}`;
}
