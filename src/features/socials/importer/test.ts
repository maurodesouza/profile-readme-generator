import { describe, it, expect, vi } from 'vitest';

import { Sections } from '#/types';
import { defaultSocialsSectionConfig } from '../default-config';

import { socialsImporter } from '../importer';

vi.mock('#/resources', () => ({
  social_icons: [
    {
      name: 'linkedin',
      icons: ['default'],
      badge: {
        message: 'LinkedIn',
        color: '0077B5',
        label: '',
        logo: 'linkedin',
        logoColor: 'white',
      },
    },
    {
      name: 'twitter',
      icons: ['default'],
      badge: {
        message: 'X',
        color: '000000',
        label: '',
        logo: 'x',
        logoColor: 'white',
      },
    },
  ],
}));

const makeImg = (alt: string, src: string, height = 40, width = 52) => ({
  type: 'element',
  tagName: 'img',
  properties: { src, alt, height, width },
  children: [],
});

const makeAnchorWithImg = (href: string, img: any) => ({
  type: 'element',
  tagName: 'a',
  properties: { href },
  children: [img],
});

const makeSocialsDiv = (children: unknown[], align = 'left') => ({
  type: 'element',
  tagName: 'div',
  properties: { align },
  children,
});

describe('FEATURE - socials importer', () => {
  it('returns null when no element children are found', () => {
    expect(socialsImporter(makeSocialsDiv([]) as any)).toBeNull();
  });

  it('returns a CanvasSection with type Sections.SOCIALS and a string id', () => {
    const result = socialsImporter(
      makeSocialsDiv([
        makeImg('linkedin logo', 'https://cdn.simpleicons.org/linkedin/0077B5'),
      ]) as any
    );

    expect(result).not.toBeNull();
    expect(result?.type).toBe(Sections.SOCIALS);
    expect(typeof result?.id).toBe('string');
    expect(result?.id).not.toBe('');
  });

  it('parses icons matching social_icons by alt name', () => {
    const result = socialsImporter(
      makeSocialsDiv([
        makeImg('linkedin logo', 'https://cdn.simpleicons.org/linkedin/0077B5'),
      ]) as any
    );

    expect(result?.props.content.socials).toHaveProperty('linkedin');
  });

  it('skips icons not found in social_icons', () => {
    const result = socialsImporter(
      makeSocialsDiv([
        makeImg('unknownlogo', 'https://example.com/unknown.svg'),
        makeImg('linkedin logo', 'https://cdn.simpleicons.org/linkedin/0077B5'),
      ]) as any
    );

    expect(Object.keys(result?.props.content.socials)).toEqual(['linkedin']);
  });

  it('sets type to "icon" when src does not include "shields"', () => {
    const result = socialsImporter(
      makeSocialsDiv([
        makeImg('linkedin logo', 'https://cdn.simpleicons.org/linkedin/0077B5'),
      ]) as any
    );

    expect(result?.props.content.styles.type).toBe('icon');
  });

  it('sets type to "badge" when src includes "shields"', () => {
    const result = socialsImporter(
      makeSocialsDiv([
        makeImg(
          'linkedin logo',
          'https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin&logoColor=white&style=for-the-badge'
        ),
      ]) as any
    );

    expect(result?.props.content.styles.type).toBe('badge');
  });

  it('extracts link from a wrapping anchor', () => {
    const result = socialsImporter(
      makeSocialsDiv([
        makeAnchorWithImg(
          'https://linkedin.com/in/user',
          makeImg('linkedin logo', 'https://cdn.simpleicons.org/linkedin/0077B5')
        ),
      ]) as any
    );

    expect(result?.props.content.socials.linkedin.link).toBe(
      'https://linkedin.com/in/user'
    );
  });

  it('reads align from the element properties', () => {
    const result = socialsImporter(
      makeSocialsDiv(
        [makeImg('linkedin logo', 'https://cdn.simpleicons.org/linkedin/0077B5')],
        'right'
      ) as any
    );

    expect(result?.props.styles.align).toBe('right');
  });

  it('does not mutate the shared defaultSocialsSectionConfig', () => {
    const snapshot = structuredClone(defaultSocialsSectionConfig);

    socialsImporter(
      makeSocialsDiv([
        makeImg('linkedin logo', 'https://cdn.simpleicons.org/linkedin/0077B5', 50),
      ]) as any
    );

    expect(defaultSocialsSectionConfig).toEqual(snapshot);
  });
});
