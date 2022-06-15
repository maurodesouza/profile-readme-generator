import { general as generalConfig } from 'app/config/general';
import { getStatsUrl } from '.';

type StatsType = Parameters<typeof getStatsUrl>[0];

const { imageBaseUrl } = generalConfig.urls.sections.stats;

describe('UTILS - Get stats url', () => {
  it('should return the correct url for the stats type', () => {
    const inputs = [
      {
        input: 'stats',
        expected: imageBaseUrl,
      },
      {
        input: 'languages',
        expected: imageBaseUrl + '/top-langs',
      },
    ];

    inputs.forEach(({ input, expected }) => {
      const result = getStatsUrl(input as StatsType);

      expect(result).toBe(expected);
    });
  });
});
