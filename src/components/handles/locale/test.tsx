import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

const mockReplace = vi.fn();

vi.mock('#/i18n/navigation', () => ({
  usePathname: () => '/',
  useRouter: () => ({
    replace: mockReplace,
    push: vi.fn(),
    refresh: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    prefetch: vi.fn(),
  }),
}));

import { actions } from '#/lib/command';
import { LocaleHandler } from '.';

const messages = {
  ui: {},
  metadata: {},
  fields: {},
  'privacy-policy': {},
};

function renderWithProvider() {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      <LocaleHandler />
    </NextIntlClientProvider>
  );
}

describe('LocaleHandler', () => {
  beforeEach(() => {
    mockReplace.mockReset();
    cleanup();
  });

  it('dispatches locale.use and calls router.replace with the new locale', async () => {
    const { unmount } = renderWithProvider();

    await actions.locale.use('pt-BR');

    expect(mockReplace).toHaveBeenCalledWith('/', { locale: 'pt-BR' });

    unmount();
  });
});
