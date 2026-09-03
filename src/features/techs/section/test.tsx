import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { TechsSection } from '../section';

const messages = {
  ui: {
    alts: {
      'tech-logo': '{name} logo',
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

const makeIcon = (
  path: string,
  variants?: string[],
  variantIndex?: number
) => ({
  name: 'test',
  color: '#fff',
  alias: [],
  tags: [],
  available_providers: ['devicons'],
  providers: {
    devicons: variants ? { path, variants } : { path },
  },
  currentProvider: 'devicons',
  config:
    variantIndex !== undefined ? { devicons: { variant: variantIndex } } : {},
});

describe('FEATURE - TechsSection', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the wrapper div with flex flex-wrap and justify-content from align', () => {
    const { container } = renderWithProvider(
      <TechsSection
        content={{
          icons: { javascript: makeIcon('https://example.com/js.svg') as any },
          styles: { height: 40 },
        }}
        styles={{ align: 'center', spacing: 12 }}
      />
    );

    const wrapper = container.querySelector('.flex');

    expect(wrapper).not.toBeNull();
    expect(wrapper?.className).toContain('flex-wrap');
    expect(wrapper?.getAttribute('style')).toContain('justify-content: center');
  });

  it('renders one img per icon with the correct src', () => {
    const { container } = renderWithProvider(
      <TechsSection
        content={{
          icons: {
            javascript: makeIcon('https://example.com/js.svg') as any,
            react: makeIcon('https://example.com/react.svg') as any,
          },
          styles: { height: 40 },
        }}
        styles={{ align: 'center', spacing: 12 }}
      />
    );

    const imgs = container.querySelectorAll('img');

    expect(imgs).toHaveLength(2);
    expect(imgs[0]?.getAttribute('src')).toBe('https://example.com/js.svg');
    expect(imgs[1]?.getAttribute('src')).toBe('https://example.com/react.svg');
  });

  it('uses the variant at the configured index when variants exist', () => {
    const { container } = renderWithProvider(
      <TechsSection
        content={{
          icons: {
            myicon: makeIcon(
              'https://example.com/original.svg',
              [
                'https://example.com/original.svg',
                'https://example.com/plain.svg',
              ],
              1
            ) as any,
          },
          styles: { height: 40 },
        }}
        styles={{ align: 'center', spacing: 12 }}
      />
    );

    expect(container.querySelector('img')?.getAttribute('src')).toBe(
      'https://example.com/plain.svg'
    );
  });

  it('applies height as inline style on each img', () => {
    const { container } = renderWithProvider(
      <TechsSection
        content={{
          icons: { javascript: makeIcon('https://example.com/js.svg') as any },
          styles: { height: 50 },
        }}
        styles={{ align: 'center', spacing: 12 }}
      />
    );

    expect(container.querySelector('img')?.style.height).toBe('50px');
  });

  it('applies spacing as gap on the wrapper div', () => {
    const { container } = renderWithProvider(
      <TechsSection
        content={{
          icons: { javascript: makeIcon('https://example.com/js.svg') as any },
          styles: { height: 40 },
        }}
        styles={{ align: 'center', spacing: 20 }}
      />
    );

    expect(container.querySelector('.flex')?.getAttribute('style')).toContain(
      'gap: 20px'
    );
  });
});
