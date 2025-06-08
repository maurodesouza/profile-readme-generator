import { config } from 'config';
import { getStatsUrl } from '.';

type StatsType = Parameters<typeof getStatsUrl>[0];

const { imageBaseUrl, streakBaseUrl } = config.general.urls.sections.stats;

describe('UTILS - Get stats url', () => {
  it('should return the correct url for the stats type', () => {
    const github = 'some';

    const inputs = [
      {
        input: 'stats',
        expected: `${imageBaseUrl}?username=${github}`,
      },
      {
        input: 'languages',
        expected: `${imageBaseUrl}/top-langs?username=${github}`,
      },
      {
        input: 'streak',
        expected: `${streakBaseUrl}?user=${github}`,
      },
    ];

    inputs.forEach(({ input, expected }) => {
      const result = getStatsUrl(input as StatsType, github);

      expect(result).toBe(expected);
    });
  });
});
