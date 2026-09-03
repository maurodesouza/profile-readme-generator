import { describe, it, expect, vi } from 'vitest';

import { Sections } from '#/types';
import { defaultTechsSectionConfig } from '../default-config';

import { techsImporter } from '../importer';

vi.mock('#/resources', () => ({
  tech_icons: [
    {
      name: 'javascript',
      color: '#F7DF1E',
      alias: ['js'],
      tags: [],
      available_providers: ['simple_icons', 'devicons'],
      providers: {
        simple_icons: { path: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
        devicons: {
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
      },
    },
  ],
}));

const makeImg = (alt: string, src: string, height = 40) => ({
  type: 'element',
  tagName: 'img',
  properties: { src, alt, height },
  children: [],
});

const makeSpacingImg = (width = 12) => ({
  type: 'element',
  tagName: 'img',
  properties: { width },
  children: [],
});

const makeTechsDiv = (children: unknown[], align = 'left') => ({
  type: 'element',
  tagName: 'div',
  properties: { align },
  children,
});

describe('FEATURE - techs importer', () => {
  it('returns null when no img children with src and alt are found', () => {
    expect(
      techsImporter(
        makeTechsDiv([
          { type: 'element', tagName: 'img', properties: {}, children: [] },
        ]) as any
      )
    ).toBeNull();
  });

  it('returns a CanvasSection with type Sections.TECHS and a string id', () => {
    const result = techsImporter(
      makeTechsDiv([
        makeImg('javascript logo', 'https://cdn.simpleicons.org/javascript/F7DF1E'),
      ]) as any
    );

    expect(result).not.toBeNull();
    expect(result?.type).toBe(Sections.TECHS);
    expect(typeof result?.id).toBe('string');
    expect(result?.id).not.toBe('');
  });

  it('parses icons matching tech_icons by alt name', () => {
    const result = techsImporter(
      makeTechsDiv([
        makeImg('javascript logo', 'https://cdn.simpleicons.org/javascript/F7DF1E'),
      ]) as any
    );

    expect(result?.props.content.icons).toHaveProperty('javascript');
    expect(result?.props.content.icons.javascript.currentProvider).toBe(
      'simple_icons'
    );
  });

  it('skips icons not found in tech_icons', () => {
    const result = techsImporter(
      makeTechsDiv([
        makeImg('unknownlogo', 'https://example.com/unknown.svg'),
        makeImg('javascript logo', 'https://cdn.simpleicons.org/javascript/F7DF1E'),
      ]) as any
    );

    expect(Object.keys(result?.props.content.icons)).toEqual(['javascript']);
  });

  it('extracts height from the first image', () => {
    const result = techsImporter(
      makeTechsDiv([
        makeImg('javascript logo', 'https://cdn.simpleicons.org/javascript/F7DF1E', 50),
      ]) as any
    );

    expect(result?.props.content.styles.height).toBe(50);
  });

  it('reads align from the element properties', () => {
    const result = techsImporter(
      makeTechsDiv(
        [makeImg('javascript logo', 'https://cdn.simpleicons.org/javascript/F7DF1E')],
        'right'
      ) as any
    );

    expect(result?.props.styles.align).toBe('right');
  });

  it('extracts spacing from the first spacing image width', () => {
    const result = techsImporter(
      makeTechsDiv([
        makeImg('javascript logo', 'https://cdn.simpleicons.org/javascript/F7DF1E'),
        makeSpacingImg(20),
        makeImg('react logo', 'https://cdn.simpleicons.org/react/61DAFB'),
      ]) as any
    );

    expect(result?.props.styles.spacing).toBe(20);
  });

  it('defaults spacing to 12 when no spacing image is found', () => {
    const result = techsImporter(
      makeTechsDiv([
        makeImg('javascript logo', 'https://cdn.simpleicons.org/javascript/F7DF1E'),
      ]) as any
    );

    expect(result?.props.styles.spacing).toBe(12);
  });

  it('does not mutate the shared defaultTechsSectionConfig', () => {
    const snapshot = structuredClone(defaultTechsSectionConfig);

    techsImporter(
      makeTechsDiv([
        makeImg('javascript logo', 'https://cdn.simpleicons.org/javascript/F7DF1E', 60),
      ]) as any
    );

    expect(defaultTechsSectionConfig).toEqual(snapshot);
  });
});
