import { general as generalConfig } from 'app/config/general';
import { getMusicUrl } from '.';

const { profileBaseUrl, recentlyPlayedBaseUrl } =
  generalConfig.urls.sections.music.spotify;

describe('UTILS - Get music url', () => {
  it('should return the correct url for the recently played type', () => {
    const inputs = [
      {
        props: {
          test: 'faa',
          too: 'test',
        },

        expect: {
          profileUrl: undefined,
          imgUrl: `${recentlyPlayedBaseUrl}?test=faa&too=test`,
        },
      },

      {
        props: {
          user: 'test',
          foo: 'some',
          here: 'bla',
        },

        expect: {
          profileUrl: `${profileBaseUrl}/test`,
          imgUrl: `${recentlyPlayedBaseUrl}?foo=some&here=bla`,
        },
      },
    ];

    inputs.forEach(input => {
      const { spotifyAccountUrl, imageUrl } = getMusicUrl(
        'recently',
        input.props
      );

      const { imgUrl, profileUrl } = input.expect;

      expect(spotifyAccountUrl).toBe(profileUrl);
      expect(imageUrl).toBe(imgUrl);
    });
  });

  it('should return the correct url for the current music playback type', () => {
    const inputs = [
      {
        props: {
          project: 'faa',
          faa: {
            url: 'test',
            props: {
              foo: 'some',
              here: 'bla',
            },
          },
        },

        expect: {
          profileUrl: undefined,
          imgUrl: `test?foo=some&here=bla`,
        },
      },

      {
        props: {
          project: 'moo',
          moo: {
            url: 'some-url',
            props: {
              bla: 'cat',
              dog: 'here',
            },
          },
        },

        expect: {
          profileUrl: undefined,
          imgUrl: `some-url?bla=cat&dog=here`,
        },
      },
    ];

    inputs.forEach(input => {
      const { spotifyAccountUrl, imageUrl } = getMusicUrl(
        'currently',
        input.props
      );

      const { imgUrl, profileUrl } = input.expect;

      expect(spotifyAccountUrl).toBe(profileUrl);
      expect(imageUrl).toBe(imgUrl);
    });
  });
});
