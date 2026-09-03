import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { MusicSection } from '../section';

vi.mock('#/utils/url', () => ({
  url: {
    getMusic: vi.fn((type: string) => {
      if (type === 'recently') {
        return {
          spotifyAccountUrl: 'https://spotify.com/user/johndoe',
          imageUrl: 'https://img.example.com/recently',
        };
      }
      return { imageUrl: 'https://img.example.com/currently' };
    }),
  },
}));

const messages = {
  ui: {
    alts: {
      'spotify-recently': 'Spotify recently played',
      'spotify-currently': 'Widget with the current Spotify song',
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

describe('FEATURE - MusicSection', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the wrapper div with flex class and justify-content from align', () => {
    const { container } = renderWithProvider(
      <MusicSection
        id="section-1"
        content={{ type: 'recently', recently: {}, currently: {} } as any}
        styles={{ align: 'center' }}
      />
    );

    const wrapper = container.querySelector('.flex');

    expect(wrapper).not.toBeNull();
    expect(wrapper?.getAttribute('style')).toContain('justify-content: center');
  });

  it('renders an img with src from url.getMusic for recently', () => {
    const { container } = renderWithProvider(
      <MusicSection
        id="section-1"
        content={{ type: 'recently', recently: {}, currently: {} } as any}
        styles={{ align: 'center' }}
      />
    );

    const img = container.querySelector('img');

    expect(img?.getAttribute('src')).toBe('https://img.example.com/recently');
  });

  it('wraps the img in an anchor when spotifyAccountUrl is present (recently)', () => {
    const { container } = renderWithProvider(
      <MusicSection
        id="section-1"
        content={{ type: 'recently', recently: {}, currently: {} } as any}
        styles={{ align: 'center' }}
      />
    );

    const anchor = container.querySelector('a');

    expect(anchor).not.toBeNull();
    expect(anchor?.getAttribute('href')).toBe('https://spotify.com/user/johndoe');
  });

  it('does not wrap the img in an anchor when spotifyAccountUrl is absent (currently)', () => {
    const { container } = renderWithProvider(
      <MusicSection
        id="section-1"
        content={{ type: 'currently', recently: {}, currently: {} } as any}
        styles={{ align: 'center' }}
      />
    );

    expect(container.querySelector('a')).toBeNull();
    expect(container.querySelector('img')?.getAttribute('src')).toBe(
      'https://img.example.com/currently'
    );
  });

  it('renders the img with alt from translations', () => {
    const { container } = renderWithProvider(
      <MusicSection
        id="section-1"
        content={{ type: 'recently', recently: {}, currently: {} } as any}
        styles={{ align: 'center' }}
      />
    );

    expect(container.querySelector('img')?.getAttribute('alt')).toBe(
      'Spotify recently played'
    );
  });
});
