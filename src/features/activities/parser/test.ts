import { describe, it, expect, vi } from 'vitest';

import { Sections } from '#/types';

import { activitiesSectionParser } from '../parser';

vi.mock('#/utils/url', () => ({
  url: {
    getActivities: vi.fn((type: string) => `https://example.com/${type}`),
  },
}));

describe('FEATURE - activities parser', () => {
  it('emits a div with data-importer="activities" for medium type', () => {
    const result = activitiesSectionParser({
      content: { type: 'medium', limit: 2, username: 'johndoe' },
      styles: { align: 'center' },
    });

    expect(result).toContain(`data-importer="${Sections.ACTIVITIES}"`);
    expect(result).toContain('<div');
    expect(result).toContain('</div>');
  });

  it('emits one <a><img></a> per post based on content.limit', () => {
    const result = activitiesSectionParser({
      content: { type: 'medium', limit: 3, username: 'johndoe' },
      styles: { align: 'center' },
    });

    const anchorCount = (result.match(/<a /g) || []).length;
    const imgCount = (result.match(/<img /g) || []).length;

    expect(anchorCount).toBe(3);
    expect(imgCount).toBe(3);
  });

  it('builds each post src as baseUrl/@username/index', () => {
    const result = activitiesSectionParser({
      content: { type: 'medium', limit: 2, username: 'johndoe' },
      styles: { align: 'center' },
    });

    expect(result).toContain('href="https://example.com/medium/@johndoe/0"');
    expect(result).toContain('href="https://example.com/medium/@johndoe/1"');
    expect(result).toContain('src="https://example.com/medium/@johndoe/0"');
    expect(result).toContain('src="https://example.com/medium/@johndoe/1"');
  });

  it('uses alt text "Medium post N" for each post', () => {
    const result = activitiesSectionParser({
      content: { type: 'medium', limit: 2, username: 'johndoe' },
      styles: { align: 'center' },
    });

    expect(result).toContain('alt="Medium post 1"');
    expect(result).toContain('alt="Medium post 2"');
  });

  it('defaults limit to 3 when not provided for medium', () => {
    const result = activitiesSectionParser({
      content: { type: 'medium', username: 'johndoe' },
      styles: { align: 'center' },
    });

    const anchorCount = (result.match(/<a /g) || []).length;

    expect(anchorCount).toBe(3);
  });

  it('includes the align attribute on the wrapper div for medium', () => {
    const result = activitiesSectionParser({
      content: { type: 'medium', limit: 1, username: 'johndoe' },
      styles: { align: 'right' },
    });

    expect(result).toContain('align="right"');
  });

  it('falls back to default handler for unknown types', () => {
    const result = activitiesSectionParser({
      content: { type: 'unknown-type' as any },
      styles: { align: 'left' },
    });

    expect(result).toContain('align="left"');
    expect(result).toContain('<img');
    expect(result).toContain('src="https://example.com/unknown-type"');
    expect(result).toContain('alt="Layout with last unknown-type posts"');
  });

  it('does not include data-importer on the default handler path', () => {
    const result = activitiesSectionParser({
      content: { type: 'unknown-type' as any },
      styles: { align: 'left' },
    });

    expect(result).not.toContain('data-importer');
  });
});
