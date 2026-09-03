import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';

import { textSectionParser } from '../parser';

describe('FEATURE - text parser', () => {
  it('wraps the trimmed text in the tag provided by content.as', () => {
    const result = textSectionParser({
      content: { text: 'Hello World', as: 'p' },
      styles: { align: 'left' },
    });

    expect(result).toBe(
      `<p data-importer="${Sections.TEXT}" align="left">Hello World</p>`
    );
  });

  it('renders an h1 tag when content.as is h1', () => {
    const result = textSectionParser({
      content: { text: 'Title', as: 'h1' },
      styles: { align: 'center' },
    });

    expect(result).toBe(
      `<h1 data-importer="${Sections.TEXT}" align="center">Title</h1>`
    );
  });

  it('emits the data-importer attribute with the text section value', () => {
    const result = textSectionParser({
      content: { text: 'Hello', as: 'p' },
      styles: { align: 'left' },
    });

    expect(result).toContain(`data-importer="${Sections.TEXT}"`);
  });

  it('emits the align attribute from styles.align for left, center and right', () => {
    const cases = ['left', 'center', 'right'] as const;

    for (const align of cases) {
      const result = textSectionParser({
        content: { text: 'Hello', as: 'p' },
        styles: { align },
      });

      expect(result).toContain(`align="${align}"`);
    }
  });

  it('trims leading and trailing whitespace from content.text', () => {
    const result = textSectionParser({
      content: { text: '   Hello World   ', as: 'p' },
      styles: { align: 'left' },
    });

    expect(result).toBe(
      `<p data-importer="${Sections.TEXT}" align="left">Hello World</p>`
    );
  });

  it('converts newline characters to <br> inside the rendered text', () => {
    const result = textSectionParser({
      content: { text: 'line1\nline2\nline3', as: 'p' },
      styles: { align: 'left' },
    });

    expect(result).toContain('line1<br>line2<br>line3');
    expect(result).not.toContain('\n');
  });

  it('does not mutate the input arguments', () => {
    const args = {
      content: { text: '  Hello\nWorld  ', as: 'h2' },
      styles: { align: 'right' },
    };

    const argsCopy = structuredClone(args);

    textSectionParser(args);

    expect(args).toEqual(argsCopy);
  });
});
