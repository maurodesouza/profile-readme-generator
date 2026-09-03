import { describe, it, expect, vi } from 'vitest';

import { Sections } from '#/types';

import { socialsSectionParser } from '../parser';

vi.mock('#/utils/url', () => ({
  url: {
    getSocialImg: vi.fn(
      (type: string, social: string) => `https://example.com/${type}/${social}`
    ),
  },
}));

describe('FEATURE - socials parser', () => {
  it('emits a div with data-importer="socials"', () => {
    const result = socialsSectionParser({
      content: {
        socials: { linkedin: { icon: 'default', link: '' } },
        styles: { type: 'icon', style: 'for-the-badge', height: 40 },
      },
      styles: { align: 'center', spacing: 12 },
    });

    expect(result).toContain(`data-importer="${Sections.SOCIALS}"`);
    expect(result).toContain('<div');
    expect(result).toContain('</div>');
  });

  it('includes the align attribute on the wrapper div', () => {
    const result = socialsSectionParser({
      content: {
        socials: { linkedin: { icon: 'default', link: '' } },
        styles: { type: 'icon', style: 'for-the-badge', height: 40 },
      },
      styles: { align: 'right', spacing: 12 },
    });

    expect(result).toContain('align="right"');
  });

  it('emits one img per social with the correct src and alt', () => {
    const result = socialsSectionParser({
      content: {
        socials: {
          linkedin: { icon: 'default', link: '' },
          twitter: { icon: 'default', link: '' },
        },
        styles: { type: 'icon', style: 'for-the-badge', height: 40 },
      },
      styles: { align: 'center', spacing: 12 },
    });

    expect(result).toContain('src="https://example.com/icon/linkedin"');
    expect(result).toContain('alt="linkedin logo"');
    expect(result).toContain('src="https://example.com/icon/twitter"');
    expect(result).toContain('alt="twitter logo"');
  });

  it('includes width attr only for icon type (not badge)', () => {
    const iconResult = socialsSectionParser({
      content: {
        socials: { linkedin: { icon: 'default', link: '' } },
        styles: { type: 'icon', style: 'for-the-badge', height: 40 },
      },
      styles: { align: 'center', spacing: 12 },
    });

    const badgeResult = socialsSectionParser({
      content: {
        socials: { linkedin: { icon: 'default', link: '' } },
        styles: { type: 'badge', style: 'for-the-badge', height: 40 },
      },
      styles: { align: 'center', spacing: 12 },
    });

    expect(iconResult).toContain('width="52"');
    expect(badgeResult).not.toContain('width=');
  });

  it('wraps the img in an anchor when link is present', () => {
    const result = socialsSectionParser({
      content: {
        socials: {
          linkedin: { icon: 'default', link: 'https://linkedin.com/in/user' },
        },
        styles: { type: 'icon', style: 'for-the-badge', height: 40 },
      },
      styles: { align: 'center', spacing: 12 },
    });

    expect(result).toContain(
      '<a href="https://linkedin.com/in/user" target="_blank">'
    );
    expect(result).toContain('</a>');
  });

  it('does not wrap the img in an anchor when link is absent', () => {
    const result = socialsSectionParser({
      content: {
        socials: { linkedin: { icon: 'default', link: '' } },
        styles: { type: 'icon', style: 'for-the-badge', height: 40 },
      },
      styles: { align: 'center', spacing: 12 },
    });

    expect(result).not.toContain('<a ');
  });

  it('defaults height to 40 when not provided', () => {
    const result = socialsSectionParser({
      content: {
        socials: { linkedin: { icon: 'default', link: '' } },
        styles: { type: 'icon', style: 'for-the-badge' } as any,
      },
      styles: { align: 'center', spacing: 12 },
    });

    expect(result).toContain('height="40"');
  });

  it('computes width as height + spacing for icon type', () => {
    const result = socialsSectionParser({
      content: {
        socials: { linkedin: { icon: 'default', link: '' } },
        styles: { type: 'icon', style: 'for-the-badge', height: 30 },
      },
      styles: { align: 'center', spacing: 20 },
    });

    expect(result).toContain('width="50"');
  });
});
