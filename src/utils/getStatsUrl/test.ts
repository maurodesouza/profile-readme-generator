import { config } from 'config';
import { getStatsUrl } from '.';

type StatsType = Parameters<typeof getStatsUrl>[0];

const { languagesBaseUrl, statsBaseUrl, streakBaseUrl } =
  config.general.urls.sections.stats;

describe('UTILS - Get stats url', () => {
  it('should return the correct url for the stats type', () => {
    const github = 'some';

    const inputs = [
      {
        input: 'stats',
        expected: `${statsBaseUrl}${github}`,
      },
      {
        input: 'languages',
        expected: `${languagesBaseUrl}${github}`,
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
