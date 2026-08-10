import { fromReadme } from '.';
import { describe, it, expect } from 'vitest';

import { Sections } from '#/types';

describe('UTILS - From readme', () => {
  it('should return an empty array when there are no importers', async () => {
    const result = await fromReadme('## Hello');

    expect(result).toEqual([]);
  });

  it('should return an empty array for unknown importers', async () => {
    const result = await fromReadme(
      '<div data-importer="unknown">content</div>'
    );

    expect(result).toEqual([]);
  });

  it('should extract a section from markdown with html', async () => {
    const result = await fromReadme('<h1 data-importer="text">Hello</h1>');

    expect(result).toHaveLength(1);
    expect(result[0].type).toBe(Sections.TEXT);
    expect(result[0].props.content.text).toBe('Hello');
  });

  it('should ignore non-element nodes', async () => {
    const result = await fromReadme(
      'text<div data-importer="text">Hello</div>'
    );

    expect(result).toHaveLength(1);
  });

  it('should ignore non-element children', async () => {
    const result = await fromReadme(
      '<div data-importer="text">Hello</div> extra'
    );

    expect(result).toHaveLength(1);
  });

  it('should ignore elements without data importer', async () => {
    const result = await fromReadme('<div>no data</div>');

    expect(result).toEqual([]);
  });
});
