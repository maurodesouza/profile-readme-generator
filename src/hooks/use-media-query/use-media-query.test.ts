import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { useMediaQuery } from './use-media-query';

function createMatchMedia(matches: boolean) {
  const listeners: ((e: MediaQueryListEvent) => void)[] = [];

  const mql = {
    media: '(min-width: 768px)',
    matches,
    addEventListener: vi.fn(
      (_event: string, cb: (e: MediaQueryListEvent) => void) => {
        listeners.push(cb);
      }
    ),
    removeEventListener: vi.fn(
      (_event: string, cb: (e: MediaQueryListEvent) => void) => {
        const idx = listeners.indexOf(cb);
        if (idx > -1) listeners.splice(idx, 1);
      }
    ),
    addListener: vi.fn((cb: (e: MediaQueryListEvent) => void) => {
      listeners.push(cb);
    }),
    removeListener: vi.fn((cb: (e: MediaQueryListEvent) => void) => {
      const idx = listeners.indexOf(cb);
      if (idx > -1) listeners.splice(idx, 1);
    }),
    dispatch: (matches: boolean) => {
      const evt = {
        media: '(min-width: 768px)',
        matches,
      } as MediaQueryListEvent;
      for (const cb of listeners) cb(evt);
    },
  };

  return mql;
}

describe('HOOK - useMediaQuery', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => createMatchMedia(false))
    );
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });

  it('returns fallback matches during SSR when matchMedia agrees with fallback', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => createMatchMedia(true))
    );

    const { result } = renderHook(() =>
      useMediaQuery('(min-width: 768px)', { ssr: true, fallback: [true] })
    );

    expect(result.current).toEqual([true]);
  });

  it('returns false fallback when no fallback is provided during SSR', () => {
    const { result } = renderHook(() =>
      useMediaQuery('(min-width: 768px)', { ssr: true })
    );

    expect(result.current).toEqual([false]);
  });

  it('returns live matchMedia matches when ssr is false', () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => createMatchMedia(true))
    );

    const { result } = renderHook(() =>
      useMediaQuery('(min-width: 768px)', { ssr: false })
    );

    expect(result.current).toEqual([true]);
  });

  it('updates value when a media query change event fires', () => {
    const mql = createMatchMedia(false);
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => mql)
    );

    const { result } = renderHook(() =>
      useMediaQuery('(min-width: 768px)', { ssr: false })
    );

    expect(result.current).toEqual([false]);

    act(() => {
      mql.dispatch(true);
    });

    expect(result.current).toEqual([true]);
  });

  it('handles multiple queries', () => {
    const mql1 = createMatchMedia(true);
    const mql2 = createMatchMedia(false);
    vi.stubGlobal(
      'matchMedia',
      vi.fn((query: string) => (query === '(min-width: 768px)' ? mql1 : mql2))
    );

    const { result } = renderHook(() =>
      useMediaQuery(['(min-width: 768px)', '(max-width: 480px)'], {
        ssr: false,
      })
    );

    expect(result.current).toEqual([true, false]);
  });
});
