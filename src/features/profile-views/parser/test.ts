import { describe, it, expect, vi } from 'vitest';

import { Sections } from '#/types';
import { url } from '#/utils/url';

import { profileViewsSectionParser } from '../parser';

vi.mock('#/utils/url', () => ({
  url: {
    getProfileViews: vi.fn(() => 'https://getloli.com/@:test-user?'),
  },
}));

vi.mock('#/utils/object', () => ({
  object: {
    toQueryParams: vi.fn(() => 'padding=7&theme=gelbooru'),
  },
}));

const settings = { user: { github: 'test-user' } } as any;

describe('FEATURE - profile-views parser', () => {
  it('builds the src URL from url.getProfileViews and object.toQueryParams', () => {
    const result = profileViewsSectionParser(
      {
        content: {
          provider: 'getloli',
          views: { getloli: { padding: 7 }, laobi: {} } as any,
        },
        styles: { align: 'center', float: 'none' },
      },
      settings
    );

    expect(result).toContain(
      'src="https://getloli.com/@:test-user?padding=7&theme=gelbooru"'
    );
  });

  it('wraps the img in a div with data-importer and align when float is none', () => {
    const result = profileViewsSectionParser(
      {
        content: {
          provider: 'getloli',
          views: { getloli: {}, laobi: {} } as any,
        },
        styles: { align: 'center', float: 'none' },
      },
      settings
    );

    expect(result).toContain(`data-importer="${Sections.PROFILE_VIEWS}"`);
    expect(result).toContain('align="center"');
    expect(result).toContain('<div');
    expect(result).toContain('</div>');
  });

  it('omits the wrapping div and adds align on the img when float is not none', () => {
    const result = profileViewsSectionParser(
      {
        content: {
          provider: 'getloli',
          views: { getloli: {}, laobi: {} } as any,
        },
        styles: { align: 'center', float: 'left' },
      },
      settings
    );

    expect(result).not.toContain('<div');
    expect(result).toContain('align="left"');
    expect(result).toContain('<img');
  });

  it('includes data-importer on the img tag', () => {
    const result = profileViewsSectionParser(
      {
        content: {
          provider: 'getloli',
          views: { getloli: {}, laobi: {} } as any,
        },
        styles: { align: 'left', float: 'none' },
      },
      settings
    );

    expect(result).toContain(`data-importer="${Sections.PROFILE_VIEWS}"`);
  });

  it('reads the github username from settings.user.github', () => {
    (url.getProfileViews as any).mockClear();

    profileViewsSectionParser(
      {
        content: {
          provider: 'getloli',
          views: { getloli: {}, laobi: {} } as any,
        },
        styles: { align: 'center', float: 'none' },
      },
      settings
    );

    expect(url.getProfileViews).toHaveBeenCalledWith('getloli', 'test-user');
  });
});
