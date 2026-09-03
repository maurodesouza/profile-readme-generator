import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';
import { defaultMusicSectionConfig } from '../default-config';

import { musicImporter } from '../importer';

const makeImg = (src: string) => ({
  type: 'element',
  tagName: 'img',
  properties: { src },
  children: [],
});

const makeAnchorWithImg = (href: string, imgSrc: string) => ({
  type: 'element',
  tagName: 'a',
  properties: { href },
  children: [makeImg(imgSrc)],
});

const makeMusicDiv = (children: unknown[], align?: string) => ({
  type: 'element',
  tagName: 'div',
  properties: align ? { align } : {},
  children,
});

describe('FEATURE - music importer', () => {
  it('returns null when the element has no children', () => {
    expect(musicImporter(makeMusicDiv([]) as any)).toBeNull();
  });

  it('returns null when the first element child is neither img nor a', () => {
    expect(
      musicImporter(
        makeMusicDiv([
          { type: 'element', tagName: 'span', properties: {}, children: [] },
        ]) as any
      )
    ).toBeNull();
  });

  it('parses a "currently" section from an img child', () => {
    const result = musicImporter(
      makeMusicDiv([
        makeImg('https://example.com/widget?theme=dark&spin=true&scan=false&rainbow=true'),
      ]) as any
    );

    expect(result).not.toBeNull();
    expect(result?.type).toBe(Sections.MUSIC);
    expect(result?.props.content.type).toBe('currently');
    expect(result?.props.content.currently.itstommi.url).toBe(
      'https://example.com/widget'
    );
    expect(result?.props.content.currently.itstommi.props.theme).toBe('dark');
    expect(result?.props.content.currently.itstommi.props.spin).toBe(true);
    expect(result?.props.content.currently.itstommi.props.scan).toBe(false);
    expect(result?.props.content.currently.itstommi.props.rainbow).toBe(true);
  });

  it('parses a "recently" section from an anchor child', () => {
    const result = musicImporter(
      makeMusicDiv([
        makeAnchorWithImg(
          'https://spotify.com/user/johndoe',
          'https://img.example.com/recent?count=10&unique=true'
        ),
      ]) as any
    );

    expect(result).not.toBeNull();
    expect(result?.type).toBe(Sections.MUSIC);
    expect(result?.props.content.type).toBe('recently');
    expect(result?.props.content.recently.user).toBe('johndoe');
    expect(result?.props.content.recently.count).toBe('10');
    expect(result?.props.content.recently.unique).toBe(true);
  });

  it('reads align from the element properties when present', () => {
    const result = musicImporter(
      makeMusicDiv(
        [makeImg('https://example.com/widget?theme=dark')],
        'left'
      ) as any
    );

    expect(result?.props.styles.align).toBe('left');
  });

  it('defaults align to center when the element has no align property', () => {
    const result = musicImporter(
      makeMusicDiv([makeImg('https://example.com/widget?theme=dark')]) as any
    );

    expect(result?.props.styles.align).toBe('center');
  });

  it('returns a CanvasSection with a string id', () => {
    const result = musicImporter(
      makeMusicDiv([makeImg('https://example.com/widget?theme=dark')]) as any
    );

    expect(typeof result?.id).toBe('string');
    expect(result?.id).not.toBe('');
  });

  it('does not mutate the shared defaultMusicSectionConfig', () => {
    const snapshot = structuredClone(defaultMusicSectionConfig);

    musicImporter(
      makeMusicDiv([
        makeImg('https://example.com/widget?theme=light&spin=true'),
      ]) as any
    );
    musicImporter(
      makeMusicDiv([
        makeAnchorWithImg(
          'https://spotify.com/user/someone',
          'https://img.example.com/recent?count=3'
        ),
      ]) as any
    );

    expect(defaultMusicSectionConfig).toEqual(snapshot);
  });
});
