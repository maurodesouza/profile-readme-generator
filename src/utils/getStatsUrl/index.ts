import { general as generalConfig } from 'app/config/general';

const { imageBaseUrl } = generalConfig.urls.sections.stats;

const urls = {
  stats: imageBaseUrl,
  languages: `${imageBaseUrl}/top-langs`,
};

const getStatsUrl = (type: keyof typeof urls) => urls[type];

export { getStatsUrl };
