import { config } from '#/config';
import { getProfileViews } from '.';
import { describe, it, expect } from 'vitest';

type ProfileViewsType = Parameters<typeof getProfileViews>[0];

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
      const result = getProfileViews(type as ProfileViewsType, username);

      expect(result).toBe(expected);
    });
  });
});
