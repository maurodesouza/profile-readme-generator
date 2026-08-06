import { config } from '#/config';
import { getActivities } from '.';
import { describe, it, expect } from 'vitest';

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
      const result = getActivities('medium');

      expect(result).toBe(expected);
    });
  });
});
