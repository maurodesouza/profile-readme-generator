import { describe, it, expect, vi, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import { SnakeSection } from '../section';

vi.mock('#/components/organisms/sections/guard', () => ({
  GuardSection: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="guard-section">{children}</div>
  ),
}));

const messages = { ui: { alts: { snake: 'Snake animation' } } };

function renderWithProvider(ui: React.ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {ui}
    </NextIntlClientProvider>
  );
}

describe('FEATURE - SnakeSection', () => {
  afterEach(() => {
    cleanup();
  });

  it('wraps content in GuardSection', () => {
    const { getByTestId } = renderWithProvider(<SnakeSection id="section-1" />);

    expect(getByTestId('guard-section')).not.toBeNull();
  });

  it('renders an img with the snake svg src', () => {
    const { container } = renderWithProvider(<SnakeSection id="section-1" />);

    const img = container.querySelector('img');

    expect(img).not.toBeNull();
    expect(img?.getAttribute('src')).toContain('snake.svg');
  });

  it('renders the img with alt from translations', () => {
    const { container } = renderWithProvider(<SnakeSection id="section-1" />);

    expect(container.querySelector('img')?.getAttribute('alt')).toBe(
      'Snake animation'
    );
  });

  it('renders the img with w-full class', () => {
    const { container } = renderWithProvider(<SnakeSection id="section-1" />);

    expect(container.querySelector('img')?.className).toContain('w-full');
  });
});
