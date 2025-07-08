import { config } from 'config';
import { getActivitiesUrl } from '.';

const { mediumBaseUrl } = config.general.urls.sections.activities;

describe('UTILS - Get activities url', () => {
  it('should return the correct url for the activity type', () => {
    const inputs = [
      {
        expected: `${mediumBaseUrl}`,
      },
    ];

    inputs.forEach(input => {
      const { expected } = input;
      const result = getActivitiesUrl('medium');

      expect(result).toBe(expected);
    });
  });
});
