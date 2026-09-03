import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';

import { imageSectionParser } from '../parser';

describe('FEATURE - image parser', () => {
  it('wraps the img in a div with data-importer and align when float is none', () => {
    const result = imageSectionParser({
      content: { url: 'https://example.com/img.gif' },
      styles: { align: 'center', height: 200, float: 'none' },
    });

    expect(result).toContain(`data-importer="${Sections.IMAGE}"`);
    expect(result).toContain('align="center"');
    expect(result).toContain('<div');
    expect(result).toContain('</div>');
  });

  it('omits the wrapping div and adds align on the img when float is not none', () => {
    const result = imageSectionParser({
      content: { url: 'https://example.com/img.gif' },
      styles: { align: 'center', height: 200, float: 'left' },
    });

    expect(result).not.toContain('<div');
    expect(result).toContain('align="left"');
    expect(result).toContain('<img');
  });

  it('includes height and src from content/styles on the img', () => {
    const result = imageSectionParser({
      content: { url: 'https://example.com/img.gif' },
      styles: { align: 'left', height: 150, float: 'none' },
    });

    expect(result).toContain('height="150"');
    expect(result).toContain('src="https://example.com/img.gif"');
  });

  it('includes data-importer on the img tag', () => {
    const result = imageSectionParser({
      content: { url: 'https://example.com/img.gif' },
      styles: { align: 'left', height: 200, float: 'none' },
    });

    expect(result).toContain(`data-importer="${Sections.IMAGE}"`);
  });
});
