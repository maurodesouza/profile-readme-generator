import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { PacmanSection } from '../section';

vi.mock('#/components/organisms/sections/guard', () => ({
  GuardSection: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="guard-section">{children}</div>
  ),
}));

const messages = { ui: { alts: { pacman: 'Pacman contribution graph' } } };

function renderWithProvider(ui: React.ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {ui}
    </NextIntlClientProvider>
  );
}

describe('FEATURE - PacmanSection', () => {
  afterEach(() => {
    cleanup();
  });

  it('wraps content in GuardSection', () => {
    const { getByTestId } = renderWithProvider(
      <PacmanSection id="section-1" />
    );

    expect(getByTestId('guard-section')).not.toBeNull();
  });

  it('renders an img with the pacman svg src by default', () => {
    const { container } = renderWithProvider(
      <PacmanSection id="section-1" />
    );

    const img = container.querySelector('img');

    expect(img).not.toBeNull();
    expect(img?.getAttribute('src')).toContain('pacman.svg');
  });

  it('renders the breakout svg when game is "breakout"', () => {
    const { container } = renderWithProvider(
      <PacmanSection id="section-1" game="breakout" />
    );

    expect(container.querySelector('img')?.getAttribute('src')).toContain(
      'breakout.svg'
    );
  });

  it('falls back to pacman svg for an unknown game', () => {
    const { container } = renderWithProvider(
      <PacmanSection id="section-1" game="unknown-game" />
    );

    expect(container.querySelector('img')?.getAttribute('src')).toContain(
      'pacman.svg'
    );
  });

  it('renders the img with w-full class', () => {
    const { container } = renderWithProvider(
      <PacmanSection id="section-1" />
    );

    expect(container.querySelector('img')?.className).toContain('w-full');
  });
});
