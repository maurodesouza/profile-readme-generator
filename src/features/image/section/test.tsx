import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { ImageSection } from '../section';

const messages = { ui: { alts: { image: 'Image' } } };

function renderWithProvider(ui: React.ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {ui}
    </NextIntlClientProvider>
  );
}

describe('FEATURE - ImageSection', () => {
  it('renders an img with src from content.url', () => {
    const { container } = renderWithProvider(
      <ImageSection
        content={{ url: 'https://example.com/img.gif' }}
        styles={{ align: 'center', float: 'none', height: 200 }}
      />
    );

    const img = container.querySelector('img');

    expect(img).not.toBeNull();
    expect(img?.getAttribute('src')).toBe('https://example.com/img.gif');
  });

  it('renders the img with alt from translations', () => {
    const { container } = renderWithProvider(
      <ImageSection
        content={{ url: 'https://example.com/img.gif' }}
        styles={{ align: 'center', float: 'none', height: 200 }}
      />
    );

    expect(container.querySelector('img')?.getAttribute('alt')).toBe('Image');
  });

  it('applies height style in px', () => {
    const { container } = renderWithProvider(
      <ImageSection
        content={{ url: 'https://example.com/img.gif' }}
        styles={{ align: 'center', float: 'none', height: 150 }}
      />
    );

    expect(container.querySelector('img')?.style.height).toBe('150px');
  });

  it('applies justifyContent and float on the container div', () => {
    const { container } = renderWithProvider(
      <ImageSection
        content={{ url: 'https://example.com/img.gif' }}
        styles={{ align: 'right', float: 'left', height: 200 }}
      />
    );

    const div = container.querySelector('div');

    expect(div?.style.justifyContent).toBe('right');
    expect(div?.style.float).toBe('left');
  });
});
