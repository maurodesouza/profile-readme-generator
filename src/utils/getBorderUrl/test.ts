import { config } from 'config';

import { CapsuleRenderParams, getBorderUrl } from '.';

type BorderTypes = Parameters<typeof getBorderUrl>[0];

const { capsuleRenderBaseUrl } = config.general.urls.sections.borders;

describe('UTILS - Get border url', () => {
  it('should return the correct url for the border type', () => {
    const inputs = [
      {
        input: {
          type: 'capsule-render',
          params: {
            faa: 'boo',
            boo: true,
            color: {
              type: 'gradient',
            },
          } as CapsuleRenderParams,
        },
        expected: `${capsuleRenderBaseUrl}?faa=boo&boo=true&color=gradient`,
      },
      {
        input: {
          type: 'capsule-render',
          params: {
            faa: 'boo',
            boo: true,
            color: {
              type: 'random',
            },
          } as CapsuleRenderParams,
        },
        expected: `${capsuleRenderBaseUrl}?faa=boo&boo=true&color=random`,
      },
      {
        input: {
          type: 'capsule-render',
          params: {
            color: {
              type: 'static',
              static: 'value',
            },
          } as CapsuleRenderParams,
        },
        expected: `${capsuleRenderBaseUrl}?color=value`,
      },
      {
        input: {
          type: 'capsule-render',
          params: {
            color: {
              type: 'theme',
              theme: 'value',
            },
          } as CapsuleRenderParams,
        },
        expected: `${capsuleRenderBaseUrl}?theme=value`,
      },
    ];

    inputs.forEach(({ input, expected }) => {
      const result = getBorderUrl(input.type as BorderTypes, input.params);

      expect(result).toBe(expected);
    });
  });
});
