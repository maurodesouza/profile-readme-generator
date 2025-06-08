import { config } from 'config';
import { getProfileViewsUrl } from '.';

type ProfileViewsType = Parameters<typeof getProfileViewsUrl>[0];

const { badgeBaseUrl, imageBaseUrl } =
  config.general.urls.sections.profileViews;

describe('UTILS - Get profile views url', () => {
  it('should return the correct url for the profile views type', () => {
    const inputs = [
      {
        input: ['badge', 'test'],
        expected: `${badgeBaseUrl}?page_id=test.test&`,
      },
      {
        input: ['default', 'test'],
        expected: `${imageBaseUrl}/test/count.svg?`,
      },
    ];

    inputs.forEach(({ input: [type, username], expected }) => {
      const result = getProfileViewsUrl(type as ProfileViewsType, username);

      expect(result).toBe(expected);
    });
  });
});
