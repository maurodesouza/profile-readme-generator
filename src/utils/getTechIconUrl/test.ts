import { general as generalConfig } from 'app/config/general';
import { getTechIconUrl } from '.';

const { iconBaseUrl } = generalConfig.urls.sections.techs;

describe('UTILS - Get tech icon url', () => {
  it('should return the correct url for the tech icon', () => {
    const inputs = [
      {
        props: ['tech', 'icon'],
        expected: '/tech/tech-icon.svg',
      },
      {
        props: ['foo', 'bla'],
        expected: '/foo/foo-bla.svg',
      },
      {
        props: ['come', 'here'],
        expected: '/come/come-here.svg',
      },
    ];

    inputs.forEach(input => {
      const { props, expected } = input;

      const result = getTechIconUrl(props[0], props[1]);

      expect(result).toBe(iconBaseUrl + expected);
    });
  });
});
