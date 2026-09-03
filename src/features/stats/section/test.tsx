import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { runInAction } from 'mobx';

import { settingsStore } from '#/stores/settings-store';

import { StatsSection } from '../section';

vi.mock('#/components/organisms/sections/guard', () => ({
  GuardSection: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="guard-section">{children}</div>
  ),
}));

vi.mock('#/utils/url', () => ({
  url: {
    getStats: vi.fn((type: string, github: string) => `https://stats.example.com/${type}?username=${github}`),
  },
}));

vi.mock('#/utils/object', () => ({
  object: {
    toQueryParams: vi.fn((params: Record<string, unknown>) =>
      Object.entries(params)
        .filter(([, v]) => v !== undefined && v !== null && v !== '')
        .map(([k, v]) => `${k}=${v}`)
        .join('&')
    ),
  },
}));

vi.mock('#/hooks', () => ({
  useSettings: () => settingsStore,
}));

const messages = {
  ui: {
    alts: {
      graph: '{graph} graph',
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

describe('FEATURE - StatsSection', () => {
  afterEach(() => {
    cleanup();
    runInAction(() => {
      settingsStore.$settings.user.github = undefined;
    });
  });

  it('wraps content in GuardSection', () => {
    runInAction(() => {
      settingsStore.$settings.user.github = 'octocat';
    });

    const { getByTestId } = renderWithProvider(
      <StatsSection
        id="section-1"
        content={{ graphs: { stats: { show: true } } as any }}
        styles={{ align: 'center', direction: 'row' }}
      />
    );

    expect(getByTestId('guard-section')).not.toBeNull();
  });

  it('renders one img per visible graph', () => {
    runInAction(() => {
      settingsStore.$settings.user.github = 'octocat';
    });

    const { container } = renderWithProvider(
      <StatsSection
        id="section-1"
        content={{
          graphs: {
            stats: { show: true, theme: 'dark' },
            languages: { show: true, layout: 'compact' },
          } as any,
        }}
        styles={{ align: 'center', direction: 'row' }}
      />
    );

    const imgs = container.querySelectorAll('img');
    expect(imgs).toHaveLength(2);
  });

  it('does not render hidden graphs', () => {
    runInAction(() => {
      settingsStore.$settings.user.github = 'octocat';
    });

    const { container } = renderWithProvider(
      <StatsSection
        id="section-1"
        content={{
          graphs: {
            stats: { show: true },
            languages: { show: false },
          } as any,
        }}
        styles={{ align: 'center', direction: 'row' }}
      />
    );

    expect(container.querySelectorAll('img')).toHaveLength(1);
  });

  it('applies justifyContent for row direction from align', () => {
    runInAction(() => {
      settingsStore.$settings.user.github = 'octocat';
    });

    const { container } = renderWithProvider(
      <StatsSection
        id="section-1"
        content={{ graphs: { stats: { show: true } } as any }}
        styles={{ align: 'right', direction: 'row' }}
      />
    );

    const wrapper = container.querySelector('.flex');
    expect(wrapper?.getAttribute('style')).toContain('justify-content: right');
  });

  it('applies alignContent for column direction from align', () => {
    runInAction(() => {
      settingsStore.$settings.user.github = 'octocat';
    });

    const { container } = renderWithProvider(
      <StatsSection
        id="section-1"
        content={{ graphs: { stats: { show: true } } as any }}
        styles={{ align: 'right', direction: 'column' }}
      />
    );

    const wrapper = container.querySelector('.flex');
    expect(wrapper?.getAttribute('style')).toContain('align-content: end');
  });

  it('renders the img with max-w-full class', () => {
    runInAction(() => {
      settingsStore.$settings.user.github = 'octocat';
    });

    const { container } = renderWithProvider(
      <StatsSection
        id="section-1"
        content={{ graphs: { stats: { show: true } } as any }}
        styles={{ align: 'center', direction: 'row' }}
      />
    );

    expect(container.querySelector('img')?.className).toContain('max-w-full');
  });
});
