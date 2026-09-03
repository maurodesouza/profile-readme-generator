import { describe, it, expect, vi } from 'vitest';

import { Sections } from '#/types';

import { borderSectionParser } from '../parser';

vi.mock('#/utils/url', () => ({
  url: {
    getBorder: vi.fn(() => 'https://capsule-render.vercel.app/api?type=waving'),
  },
}));

describe('FEATURE - border parser', () => {
  it('wraps the img in a div with data-importer="border"', () => {
    const result = borderSectionParser({
      content: {
        provider: 'capsule-render',
        borders: { 'capsule-render': { type: 'waving' } },
      },
      styles: {},
    });

    expect(result).toContain(`data-importer="${Sections.BORDER}"`);
    expect(result).toContain('<div');
    expect(result).toContain('</div>');
  });

  it('includes an img tag with the src from url.getBorder', () => {
    const result = borderSectionParser({
      content: {
        provider: 'capsule-render',
        borders: { 'capsule-render': { type: 'waving' } },
      },
      styles: {},
    });

    expect(result).toContain('<img');
    expect(result).toContain(
      'src="https://capsule-render.vercel.app/api?type=waving"'
    );
  });

  it('ignores the styles argument', () => {
    const result1 = borderSectionParser({
      content: {
        provider: 'capsule-render',
        borders: { 'capsule-render': { type: 'waving' } },
      },
      styles: { align: 'center' },
    });
    const result2 = borderSectionParser({
      content: {
        provider: 'capsule-render',
        borders: { 'capsule-render': { type: 'waving' } },
      },
      styles: {},
    });

    expect(result1).toBe(result2);
  });
});
