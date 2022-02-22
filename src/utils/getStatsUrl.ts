const baseUrl = 'https://github-readme-stats.vercel.app/api';

const urls = {
  stats: `${baseUrl}`,
  languages: `${baseUrl}/top-langs`,
};

const getStatsUrl = (type: keyof typeof urls) => urls[type];

export { getStatsUrl };
