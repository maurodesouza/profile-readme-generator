import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';

import { imageImporter } from '../importer';

describe('FEATURE - image importer', () => {
  it('sets styles and content from an img element', () => {
    const element = {
      type: 'element',
      tagName: 'img',
      properties: {
        align: 'left',
        height: 300,
        src: 'https://example.com/img.gif',
      },
    };

    const result = imageImporter(element as any);

    expect(result?.props.styles.align).toBe('left');
    expect(result?.props.styles.float).toBe('left');
    expect(result?.props.styles.height).toBe(300);
    expect(result?.props.content.url).toBe('https://example.com/img.gif');
  });

  it('defaults float to none when align is not provided on img', () => {
    const element = {
      type: 'element',
      tagName: 'img',
      properties: { src: 'https://example.com/img.gif' },
    };

    const result = imageImporter(element as any);

    expect(result?.props.styles.float).toBe('none');
    expect(result?.props.styles.height).toBe(200);
  });

  it('defaults align to center when not provided', () => {
    const element = {
      type: 'element',
      tagName: 'img',
      properties: { src: 'https://example.com/img.gif' },
    };

    const result = imageImporter(element as any);

    expect(result?.props.styles.align).toBe('center');
  });

  it('reads height and src from the inner img when tagName is div', () => {
    const element = {
      type: 'element',
      tagName: 'div',
      properties: { align: 'right' },
      children: [
        {
          type: 'element',
          tagName: 'img',
          properties: { height: 250, src: 'https://example.com/inner.gif' },
        },
      ],
    };

    const result = imageImporter(element as any);

    expect(result?.props.styles.align).toBe('right');
    expect(result?.props.styles.height).toBe(250);
    expect(result?.props.content.url).toBe('https://example.com/inner.gif');
  });

  it('returns null when tagName is neither img nor div', () => {
    const element = {
      type: 'element',
      tagName: 'span',
      properties: {},
    };

    expect(imageImporter(element as any)).toBeNull();
  });

  it('returns a CanvasSection with type Sections.IMAGE and a string id', () => {
    const element = {
      type: 'element',
      tagName: 'img',
      properties: { src: 'https://example.com/img.gif' },
    };

    const result = imageImporter(element as any);

    expect(result?.type).toBe(Sections.IMAGE);
    expect(typeof result?.id).toBe('string');
    expect(result?.id).not.toBe('');
  });
});
