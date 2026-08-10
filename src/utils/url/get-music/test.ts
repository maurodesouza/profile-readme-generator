import { config } from '#/config';
import { getMusic } from '.';
import { describe, it, expect } from 'vitest';

const { profileBaseUrl, recentlyPlayedBaseUrl } =
  config.general.urls.sections.music.spotify;

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
          imgUrl: `${recentlyPlayedBaseUrl}?user=test&foo=some&here=bla`,
        },
      },
    ];

    inputs.forEach(input => {
      const { spotifyAccountUrl, imageUrl } = getMusic('recently', input.props);

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

      {
        props: {
          project: 'foo',
          foo: {
            url: 'empty-props',
          },
        },

        expect: {
          profileUrl: undefined,
          imgUrl: 'empty-props?',
        },
      },
    ];

    inputs.forEach(input => {
      const { spotifyAccountUrl, imageUrl } = getMusic(
        'currently',
        input.props
      );

      const { imgUrl, profileUrl } = input.expect;

      expect(spotifyAccountUrl).toBe(profileUrl);
      expect(imageUrl).toBe(imgUrl);
    });
  });
});
