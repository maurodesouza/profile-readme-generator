import { describe, it, expect, vi } from 'vitest';

import { Sections } from '#/types';

import { musicSectionParser } from '../parser';

vi.mock('#/utils/url', () => ({
  url: {
    getMusic: vi.fn((type: string) => {
      if (type === 'recently') {
        return {
          spotifyAccountUrl: 'https://spotify.com/user/johndoe',
          imageUrl: 'https://img.example.com/recently',
        };
      }
      return { imageUrl: 'https://img.example.com/currently' };
    }),
  },
}));

describe('FEATURE - music parser', () => {
  it('emits a div with data-importer="music"', () => {
    const result = musicSectionParser({
      content: {
        type: 'recently',
        recently: { user: 'johndoe' },
        currently: {},
      } as any,
      styles: { align: 'center' },
    });

    expect(result).toContain(`data-importer="${Sections.MUSIC}"`);
    expect(result).toContain('<div');
    expect(result).toContain('</div>');
  });

  it('includes the align attribute on the wrapper div', () => {
    const result = musicSectionParser({
      content: {
        type: 'recently',
        recently: { user: 'johndoe' },
        currently: {},
      } as any,
      styles: { align: 'right' },
    });

    expect(result).toContain('align="right"');
  });

  it('wraps the img in an anchor when spotifyAccountUrl is present (recently)', () => {
    const result = musicSectionParser({
      content: {
        type: 'recently',
        recently: { user: 'johndoe' },
        currently: {},
      } as any,
      styles: { align: 'center' },
    });

    expect(result).toContain('<a href="https://spotify.com/user/johndoe">');
    expect(result).toContain('</a>');
    expect(result).toContain('src="https://img.example.com/recently"');
  });

  it('does not wrap the img in an anchor when spotifyAccountUrl is absent (currently)', () => {
    const result = musicSectionParser({
      content: { type: 'currently', recently: {}, currently: {} } as any,
      styles: { align: 'center' },
    });

    expect(result).not.toContain('<a ');
    expect(result).toContain('src="https://img.example.com/currently"');
  });

  it('uses the correct alt text for recently type', () => {
    const result = musicSectionParser({
      content: {
        type: 'recently',
        recently: { user: 'johndoe' },
        currently: {},
      } as any,
      styles: { align: 'center' },
    });

    expect(result).toContain('alt="Spotify recently played"');
  });

  it('uses the correct alt text for currently type', () => {
    const result = musicSectionParser({
      content: { type: 'currently', recently: {}, currently: {} } as any,
      styles: { align: 'center' },
    });

    expect(result).toContain('alt="Widget with the current Spotify song"');
  });
});
