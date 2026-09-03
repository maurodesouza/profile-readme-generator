import { describe, it, expect, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { TransitionStore } from '#/lib/command/transitions-store';

import { useTransition } from './use-transition';

describe('HOOK - useTransition', () => {
  const store = TransitionStore.getInstance();
  const key = ['test.command'];

  afterEach(() => {
    // Reset transition state between tests
    store.done(key);
  });

  it('returns false when the command is not executing', () => {
    const { result } = renderHook(() => useTransition(key));

    expect(result.current).toBe(false);
  });

  it('returns true when the matching command transition starts', () => {
    const { result } = renderHook(() => useTransition(key));

    expect(result.current).toBe(false);

    act(() => {
      store.start(key);
    });

    expect(result.current).toBe(true);
  });

  it('returns false again when the transition is done', () => {
    const { result } = renderHook(() => useTransition(key));

    act(() => {
      store.start(key);
    });
    expect(result.current).toBe(true);

    act(() => {
      store.done(key);
    });
    expect(result.current).toBe(false);
  });
});
