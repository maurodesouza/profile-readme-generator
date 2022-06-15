import { general as generalConfig } from 'app/config/general';
import { getActivitiesUrl } from '.';

const { mediumBaseUrl } = generalConfig.urls.sections.activities;

describe('UTILS - Get activities url', () => {
  it('should return the correct url for the activity type', () => {
    const inputs = [
      {
        props: {
          test: 'foo',
          bla: 'caa',
        },
        expected: `${mediumBaseUrl}?test=foo&bla=caa`,
      },
    ];

    inputs.forEach(input => {
      const { props, expected } = input;
      const result = getActivitiesUrl('medium', props);

      expect(result).toBe(expected);
    });
  });
});
