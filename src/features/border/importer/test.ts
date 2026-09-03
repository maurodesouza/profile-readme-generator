import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';
import { defaultImageSectionConfig } from '../default-config';

import { borderImporter } from '../importer';

const makeBorderElement = ({
  src = 'https://capsule-render.vercel.app/api?type=wave&height=120&reversal=true&textBg=true&color=gradient&theme=dark',
  children,
}: {
  src?: string;
  children?: unknown[];
} = {}) => ({
  type: 'element',
  tagName: 'div',
  properties: {},
  children: children ?? [
    {
      type: 'element',
      tagName: 'img',
      properties: { src },
    },
  ],
});

describe('FEATURE - border importer', () => {
  it('returns null when the element has no children', () => {
    expect(
      borderImporter(makeBorderElement({ children: [] }) as any)
    ).toBeNull();
  });

  it('returns null when no img child is found', () => {
    expect(
      borderImporter(
        makeBorderElement({
          children: [{ type: 'element', tagName: 'span', properties: {} }],
        }) as any
      )
    ).toBeNull();
  });

  it('returns null when the img has no src property', () => {
    expect(
      borderImporter(
        makeBorderElement({
          children: [{ type: 'element', tagName: 'img', properties: {} }],
        }) as any
      )
    ).toBeNull();
  });

  it('parses type from URL params', () => {
    const result = borderImporter(
      makeBorderElement({
        src: 'https://example.com/?type=egg',
      }) as any
    );

    expect(result?.props.content.borders['capsule-render'].type).toBe('egg');
  });

  it('parses height as an integer from URL params', () => {
    const result = borderImporter(
      makeBorderElement({
        src: 'https://example.com/?height=250',
      }) as any
    );

    expect(result?.props.content.borders['capsule-render'].height).toBe(250);
  });

  it('parses reversal as a boolean from URL params', () => {
    const result = borderImporter(
      makeBorderElement({
        src: 'https://example.com/?reversal=true',
      }) as any
    );

    expect(result?.props.content.borders['capsule-render'].reversal).toBe(true);
  });

  it('parses textBg as a boolean from URL params', () => {
    const result = borderImporter(
      makeBorderElement({
        src: 'https://example.com/?textBg=true',
      }) as any
    );

    expect(result?.props.content.borders['capsule-render'].textBg).toBe(true);
  });

  it('parses color type and theme from URL params', () => {
    const result = borderImporter(
      makeBorderElement({
        src: 'https://example.com/?color=gradient&theme=dark',
      }) as any
    );

    expect(result?.props.content.borders['capsule-render'].color.type).toBe(
      'gradient'
    );
    expect(result?.props.content.borders['capsule-render'].color.theme).toBe(
      'dark'
    );
  });

  it('returns a CanvasSection with type Sections.BORDER and a string id', () => {
    const result = borderImporter(makeBorderElement() as any);

    expect(result).not.toBeNull();
    expect(result?.type).toBe(Sections.BORDER);
    expect(typeof result?.id).toBe('string');
    expect(result?.id).not.toBe('');
  });

  it('does not mutate the shared defaultImageSectionConfig', () => {
    const snapshot = structuredClone(defaultImageSectionConfig);

    borderImporter(
      makeBorderElement({
        src: 'https://example.com/?type=egg&height=999',
      }) as any
    );
    borderImporter(
      makeBorderElement({
        src: 'https://example.com/?type=shark&height=50',
      }) as any
    );

    expect(defaultImageSectionConfig).toEqual(snapshot);
  });
});
