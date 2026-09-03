import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { SocialsSection } from '../section';

vi.mock('#/utils/url', () => ({
  url: {
    getSocialImg: vi.fn(
      (type: string, social: string) => `https://example.com/${type}/${social}`
    ),
  },
}));

const messages = {
  ui: {
    alts: {
      'social-logo': '{social} logo',
    },
  },
};

function renderWithProvider(ui: React.ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {ui}
    </NextIntlClientProvider>
  );
}

describe('FEATURE - SocialsSection', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the wrapper div with flex flex-wrap and justify-content from align', () => {
    const { container } = renderWithProvider(
      <SocialsSection
        content={{
          socials: { linkedin: { icon: 'default', link: '' } },
          styles: { type: 'icon', style: 'for-the-badge', height: 40 },
        }}
        styles={{ align: 'center', spacing: 12 }}
      />
    );

    const wrapper = container.querySelector('.flex');

    expect(wrapper).not.toBeNull();
    expect(wrapper?.className).toContain('flex-wrap');
    expect(wrapper?.getAttribute('style')).toContain('justify-content: center');
  });

  it('renders one img per social with the correct src', () => {
    const { container } = renderWithProvider(
      <SocialsSection
        content={{
          socials: {
            linkedin: { icon: 'default', link: '' },
            twitter: { icon: 'default', link: '' },
          },
          styles: { type: 'icon', style: 'for-the-badge', height: 40 },
        }}
        styles={{ align: 'center', spacing: 12 }}
      />
    );

    const imgs = container.querySelectorAll('img');

    expect(imgs).toHaveLength(2);
    expect(imgs[0]?.getAttribute('src')).toBe('https://example.com/icon/linkedin');
    expect(imgs[1]?.getAttribute('src')).toBe('https://example.com/icon/twitter');
  });

  it('wraps the img in an anchor when link is present', () => {
    const { container } = renderWithProvider(
      <SocialsSection
        content={{
          socials: {
            linkedin: { icon: 'default', link: 'https://linkedin.com/in/user' },
          },
          styles: { type: 'icon', style: 'for-the-badge', height: 40 },
        }}
        styles={{ align: 'center', spacing: 12 }}
      />
    );

    const anchor = container.querySelector('a');

    expect(anchor).not.toBeNull();
    expect(anchor?.getAttribute('href')).toBe('https://linkedin.com/in/user');
  });

  it('does not wrap the img in an anchor when link is absent', () => {
    const { container } = renderWithProvider(
      <SocialsSection
        content={{
          socials: { linkedin: { icon: 'default', link: '' } },
          styles: { type: 'icon', style: 'for-the-badge', height: 40 },
        }}
        styles={{ align: 'center', spacing: 12 }}
      />
    );

    expect(container.querySelector('a')).toBeNull();
  });

  it('applies height as inline style on each img', () => {
    const { container } = renderWithProvider(
      <SocialsSection
        content={{
          socials: { linkedin: { icon: 'default', link: '' } },
          styles: { type: 'icon', style: 'for-the-badge', height: 50 },
        }}
        styles={{ align: 'center', spacing: 12 }}
      />
    );

    expect(container.querySelector('img')?.style.height).toBe('50px');
  });

  it('uses spacing as gap for icon type', () => {
    const { container } = renderWithProvider(
      <SocialsSection
        content={{
          socials: { linkedin: { icon: 'default', link: '' } },
          styles: { type: 'icon', style: 'for-the-badge', height: 40 },
        }}
        styles={{ align: 'center', spacing: 20 }}
      />
    );

    expect(container.querySelector('.flex')?.getAttribute('style')).toContain(
      'gap: 20px'
    );
  });

  it('uses fixed gap of 5px for badge type', () => {
    const { container } = renderWithProvider(
      <SocialsSection
        content={{
          socials: { linkedin: { icon: 'default', link: '' } },
          styles: { type: 'badge', style: 'for-the-badge', height: 40 },
        }}
        styles={{ align: 'center', spacing: 20 }}
      />
    );

    expect(container.querySelector('.flex')?.getAttribute('style')).toContain(
      'gap: 5px'
    );
  });
});
