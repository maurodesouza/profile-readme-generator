import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { runInAction } from 'mobx';

import { settingsStore } from '#/stores/settings-store';

import { ProfileViewsSection } from '../section';

vi.mock('#/components/organisms/sections/guard', () => ({
  GuardSection: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="guard-section">{children}</div>
  ),
}));

vi.mock('#/utils/url', () => ({
  url: {
    getProfileViews: vi.fn(() => 'https://api.getloli.com/@:test-user?'),
  },
}));

vi.mock('#/utils/object', () => ({
  object: {
    toQueryParams: vi.fn(() => 'padding=7'),
  },
}));

const messages = { ui: { alts: { 'profile-views': 'Profile views' } } };

function renderWithProvider(ui: React.ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {ui}
    </NextIntlClientProvider>
  );
}

describe('FEATURE - ProfileViewsSection', () => {
  afterEach(() => {
    cleanup();
    runInAction(() => {
      settingsStore.$settings.user.github = undefined;
    });
  });

  it('renders an img with src from url.getProfileViews and object.toQueryParams', () => {
    runInAction(() => {
      settingsStore.$settings.user.github = 'test-user';
    });

    const { container } = renderWithProvider(
      <ProfileViewsSection
        id="section-1"
        content={{
          provider: 'getloli',
          views: { getloli: { padding: 7 }, laobi: {} } as any,
        }}
        styles={{ align: 'center' }}
      />
    );

    const img = container.querySelector('img');

    expect(img).not.toBeNull();
    expect(img?.getAttribute('src')).toBe(
      'https://api.getloli.com/@:test-user?padding=7'
    );
  });

  it('renders the img with alt from translations', () => {
    runInAction(() => {
      settingsStore.$settings.user.github = 'test-user';
    });

    const { container } = renderWithProvider(
      <ProfileViewsSection
        id="section-1"
        content={{
          provider: 'getloli',
          views: { getloli: {}, laobi: {} } as any,
        }}
        styles={{ align: 'center' }}
      />
    );

    expect(container.querySelector('img')?.getAttribute('alt')).toBe(
      'Profile views'
    );
  });

  it('applies justifyContent from styles.align on the container div', () => {
    runInAction(() => {
      settingsStore.$settings.user.github = 'test-user';
    });

    const { container } = renderWithProvider(
      <ProfileViewsSection
        id="section-1"
        content={{
          provider: 'getloli',
          views: { getloli: {}, laobi: {} } as any,
        }}
        styles={{ align: 'right' }}
      />
    );

    const div = container.querySelector('[data-testid="guard-section"] div');

    expect(div?.style.justifyContent).toBe('right');
  });

  it('wraps content in GuardSection', () => {
    runInAction(() => {
      settingsStore.$settings.user.github = 'test-user';
    });

    const { getByTestId } = renderWithProvider(
      <ProfileViewsSection
        id="section-1"
        content={{
          provider: 'getloli',
          views: { getloli: {}, laobi: {} } as any,
        }}
        styles={{ align: 'center' }}
      />
    );

    expect(getByTestId('guard-section')).not.toBeNull();
  });
});
