import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';

import { techsSectionParser } from '../parser';

const makeIcon = ({
  name = 'javascript',
  path = 'https://example.com/js.svg',
  variants,
  variantIndex,
}: {
  name?: string;
  path?: string;
  variants?: string[];
  variantIndex?: number;
} = {}) => ({
  name,
  color: '#F7DF1E',
  alias: [],
  tags: [],
  available_providers: ['devicons'],
  providers: {
    devicons: variants ? { path: path, variants } : { path },
  },
  currentProvider: 'devicons',
  config:
    variantIndex !== undefined ? { devicons: { variant: variantIndex } } : {},
});

describe('FEATURE - techs parser', () => {
  it('emits a div with data-importer="techs"', () => {
    const result = techsSectionParser({
      content: {
        icons: { javascript: makeIcon() as any },
        styles: { height: 40 },
      },
      styles: { align: 'center', spacing: 12 },
    });

    expect(result).toContain(`data-importer="${Sections.TECHS}"`);
    expect(result).toContain('<div');
    expect(result).toContain('</div>');
  });

  it('includes the align attribute on the wrapper div', () => {
    const result = techsSectionParser({
      content: {
        icons: { javascript: makeIcon() as any },
        styles: { height: 40 },
      },
      styles: { align: 'right', spacing: 12 },
    });

    expect(result).toContain('align="right"');
  });

  it('emits one img per icon with the correct src and alt', () => {
    const result = techsSectionParser({
      content: {
        icons: {
          javascript: makeIcon({
            name: 'javascript',
            path: 'https://example.com/js.svg',
          }) as any,
          react: makeIcon({
            name: 'react',
            path: 'https://example.com/react.svg',
          }) as any,
        },
        styles: { height: 40 },
      },
      styles: { align: 'center', spacing: 12 },
    });

    expect(result).toContain('src="https://example.com/js.svg"');
    expect(result).toContain('alt="javascript logo"');
    expect(result).toContain('src="https://example.com/react.svg"');
    expect(result).toContain('alt="react logo"');
  });

  it('emits spacing images between icons but not after the last one', () => {
    const result = techsSectionParser({
      content: {
        icons: {
          javascript: makeIcon({ path: 'https://example.com/js.svg' }) as any,
          react: makeIcon({ path: 'https://example.com/react.svg' }) as any,
        },
        styles: { height: 40 },
      },
      styles: { align: 'center', spacing: 20 },
    });

    const spacingCount = (result.match(/<img width="20"\/>/g) || []).length;
    expect(spacingCount).toBe(1);
  });

  it('uses the provider path when no variants exist', () => {
    const result = techsSectionParser({
      content: {
        icons: {
          myicon: makeIcon({ path: 'https://example.com/icon.svg' }) as any,
        },
        styles: { height: 40 },
      },
      styles: { align: 'center', spacing: 12 },
    });

    expect(result).toContain('src="https://example.com/icon.svg"');
  });

  it('uses the variant at the configured index when variants exist', () => {
    const result = techsSectionParser({
      content: {
        icons: {
          myicon: makeIcon({
            path: 'https://example.com/original.svg',
            variants: [
              'https://example.com/original.svg',
              'https://example.com/plain.svg',
            ],
            variantIndex: 1,
          }) as any,
        },
        styles: { height: 40 },
      },
      styles: { align: 'center', spacing: 12 },
    });

    expect(result).toContain('src="https://example.com/plain.svg"');
  });

  it('defaults variant index to 0 when not configured', () => {
    const result = techsSectionParser({
      content: {
        icons: {
          myicon: makeIcon({
            path: 'https://example.com/original.svg',
            variants: [
              'https://example.com/original.svg',
              'https://example.com/plain.svg',
            ],
          }) as any,
        },
        styles: { height: 40 },
      },
      styles: { align: 'center', spacing: 12 },
    });

    expect(result).toContain('src="https://example.com/original.svg"');
  });

  it('defaults height to 40 when not provided', () => {
    const result = techsSectionParser({
      content: {
        icons: {
          myicon: makeIcon({ path: 'https://example.com/icon.svg' }) as any,
        },
        styles: {},
      } as any,
      styles: { align: 'center', spacing: 12 },
    });

    expect(result).toContain('height="40"');
  });

  it('uses the provided height', () => {
    const result = techsSectionParser({
      content: {
        icons: {
          myicon: makeIcon({ path: 'https://example.com/icon.svg' }) as any,
        },
        styles: { height: 60 },
      },
      styles: { align: 'center', spacing: 12 },
    });

    expect(result).toContain('height="60"');
  });
});
