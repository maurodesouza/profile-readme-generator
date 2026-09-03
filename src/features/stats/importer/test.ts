import { describe, it, expect, vi } from 'vitest';

import { Sections } from '#/types';
import { defaultStatsSectionConfig } from '../default-config';

import { statsImporter } from '../importer';

vi.mock('#/config/general', () => ({
  general: {
    urls: {
      sections: {
        stats: {
          streakBaseUrl: 'https://streak-stats.demolab.com',
        },
      },
    },
  },
}));

vi.mock('#/utils/object', () => ({
  object: {
    deep: {
      set: vi.fn(({ obj, path, value }: any) => {
        if (path === 'show') return { ...obj, show: value };
        return obj;
      }),
    },
  },
}));

const makeImg = (src: string, alt: string, height?: number) => ({
  type: 'element',
  tagName: 'img',
  properties: {
    src,
    alt,
    ...(height ? { height } : {}),
  },
  children: [],
});

const makeStatsDiv = (children: unknown[], align?: string) => ({
  type: 'element',
  tagName: 'div',
  properties: align ? { align } : {},
  children,
});

describe('FEATURE - stats importer', () => {
  it('returns null when no img children with src and alt are found', () => {
    expect(
      statsImporter(
        makeStatsDiv([
          { type: 'element', tagName: 'img', properties: {}, children: [] },
        ]) as any
      )
    ).toBeNull();
  });

  it('returns a CanvasSection with type Sections.STATS and a string id', () => {
    const result = statsImporter(
      makeStatsDiv([
        makeImg(
          'https://raw.githubusercontent.com/octocat/octocat/stats-output/stats.svg?theme=dark',
          'stats graph'
        ),
      ]) as any
    );

    expect(result).not.toBeNull();
    expect(result?.type).toBe(Sections.STATS);
    expect(typeof result?.id).toBe('string');
    expect(result?.id).not.toBe('');
  });

  it('parses workflow-generated stats graph from raw.githubusercontent.com URL', () => {
    const result = statsImporter(
      makeStatsDiv([
        makeImg(
          'https://raw.githubusercontent.com/octocat/octocat/stats-output/stats.svg?theme=dark&hide_rank=true',
          'stats graph'
        ),
      ]) as any
    );

    expect(result?.props.content.graphs.stats.show).toBe(true);
    expect(result?.props.content.graphs.stats.theme).toBe('dark');
    expect(result?.props.content.graphs.stats.hide_rank).toBe(true);
  });

  it('coerces "true" and "false" strings to booleans via mergeParamsToConfig', () => {
    const result = statsImporter(
      makeStatsDiv([
        makeImg(
          'https://raw.githubusercontent.com/octocat/octocat/stats-output/stats.svg?hide_title=true&hide_rank=false',
          'stats graph'
        ),
      ]) as any
    );

    expect(result?.props.content.graphs.stats.hide_title).toBe(true);
    expect(result?.props.content.graphs.stats.hide_rank).toBe(false);
  });

  it('coerces numeric strings to numbers via mergeParamsToConfig', () => {
    const result = statsImporter(
      makeStatsDiv([
        makeImg(
          'https://raw.githubusercontent.com/octocat/octocat/stats-output/stats.svg?card_width=320',
          'stats graph'
        ),
      ]) as any
    );

    expect(result?.props.content.graphs.stats.card_width).toBe(320);
  });

  it('parses multiple graphs from multiple img children', () => {
    const result = statsImporter(
      makeStatsDiv([
        makeImg(
          'https://raw.githubusercontent.com/octocat/octocat/stats-output/stats.svg?theme=dark',
          'stats graph'
        ),
        makeImg(
          'https://raw.githubusercontent.com/octocat/octocat/languages-output/languages.svg?layout=compact',
          'languages graph'
        ),
      ]) as any
    );

    expect(result?.props.content.graphs.stats.show).toBe(true);
    expect(result?.props.content.graphs.languages.show).toBe(true);
  });

  it('reads align from the element properties when present', () => {
    const result = statsImporter(
      makeStatsDiv(
        [
          makeImg(
            'https://raw.githubusercontent.com/octocat/octocat/stats-output/stats.svg?theme=dark',
            'stats graph'
          ),
        ],
        'right'
      ) as any
    );

    expect(result?.props?.styles?.align).toBe('right');
  });

  it('defaults align to center when the element has no align property', () => {
    const result = statsImporter(
      makeStatsDiv([
        makeImg(
          'https://raw.githubusercontent.com/octocat/octocat/stats-output/stats.svg?theme=dark',
          'stats graph'
        ),
      ]) as any
    );

    expect(result?.props?.styles?.align).toBe('center');
  });

  it('sets show to false for graphs not present in the imported images', () => {
    const result = statsImporter(
      makeStatsDiv([
        makeImg(
          'https://raw.githubusercontent.com/octocat/octocat/stats-output/stats.svg?theme=dark',
          'stats graph'
        ),
      ]) as any
    );

    expect(result?.props.content.graphs.languages.show).toBe(false);
  });

  it('does not mutate the shared defaultStatsSectionConfig', () => {
    const snapshot = structuredClone(defaultStatsSectionConfig);

    statsImporter(
      makeStatsDiv([
        makeImg(
          'https://raw.githubusercontent.com/octocat/octocat/stats-output/stats.svg?theme=light',
          'stats graph'
        ),
      ]) as any
    );

    expect(defaultStatsSectionConfig).toEqual(snapshot);
  });
});
