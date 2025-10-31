import { config } from 'config';
import { getProfileViewsUrl } from '.';
import { describe, it, expect } from 'vitest';

type ProfileViewsType = Parameters<typeof getProfileViewsUrl>[0];

const { getloli, laobi } = config.general.urls.sections.profileViews;

describe('UTILS - Get profile views url', () => {
  it('should return the correct url for the profile views type', () => {
    const inputs = [
      {
        input: ['laobi', 'test'],
        expected: `${laobi}?page_id=test.test&`,
      },
      {
        input: ['getloli', 'test'],
        expected: `${getloli}/@:test?`,
      },
    ];

    inputs.forEach(({ input: [type, username], expected }) => {
      const result = getProfileViewsUrl(type as ProfileViewsType, username);

      expect(result).toBe(expected);
    });
  });
});
