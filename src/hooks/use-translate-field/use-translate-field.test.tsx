import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

import { useTranslateField } from './use-translate-field';

const messages = {
  fields: {
    'clear-float': 'Clear float',
    'font-size': 'Font Size',
    border: 'Border',
    stats: 'Stats',
  },
};

function createWrapper(messages: Record<string, unknown>) {
  return function Wrapper({ children }: { children: ReactNode }) {
    return (
      <NextIntlClientProvider locale="en" messages={messages}>
        {children}
      </NextIntlClientProvider>
    );
  };
}

describe('HOOK - useTranslateField', () => {
  it('returns the translated value when the slug key exists', () => {
    const { result } = renderHook(() => useTranslateField(), {
      wrapper: createWrapper(messages),
    });

    expect(result.current('Clear float')).toBe('Clear float');
    expect(result.current('Font Size')).toBe('Font Size');
    expect(result.current('border')).toBe('Border');
    expect(result.current('stats')).toBe('Stats');
  });

  it('falls back to the original value when the key does not exist', () => {
    const { result } = renderHook(() => useTranslateField(), {
      wrapper: createWrapper(messages),
    });

    expect(result.current('Nonexistent Label')).toBe('Nonexistent Label');
    expect(result.current('Some Random Thing')).toBe('Some Random Thing');
  });

  it('slugifies camelCase labels before lookup', () => {
    const { result } = renderHook(() => useTranslateField(), {
      wrapper: createWrapper(messages),
    });

    // "ClearFloat" slugifies to "clear-float" which exists
    expect(result.current('ClearFloat')).toBe('Clear float');
  });

  it('slugifies spaces and special characters before lookup', () => {
    const { result } = renderHook(() => useTranslateField(), {
      wrapper: createWrapper(messages),
    });

    // "Font  Size!!!" slugifies to "font-size" which exists
    expect(result.current('Font  Size!!!')).toBe('Font Size');
  });
});
