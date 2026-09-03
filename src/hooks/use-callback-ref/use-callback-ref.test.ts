import { describe, it, expect, vi } from 'vitest';
import { renderHook } from '@testing-library/react';

import { useCallbackRef } from './use-callback-ref';

describe('HOOK - useCallbackRef', () => {
  it('returns a stable callback identity across re-renders when deps are unchanged', () => {
    const callback = vi.fn();
    const { result, rerender } = renderHook(() => useCallbackRef(callback, []));

    const first = result.current;
    rerender();
    rerender();

    expect(result.current).toBe(first);
  });

  it('invokes the latest callback passed to it', () => {
    const { result, rerender } = renderHook(
      ({ cb }) => useCallbackRef(cb, [cb]),
      { initialProps: { cb: () => 'first' } }
    );

    expect(result.current()).toBe('first');

    rerender({ cb: () => 'second' });

    expect(result.current()).toBe('second');
  });

  it('passes arguments through to the callback', () => {
    const callback = vi.fn((a: number, b: string) => `${a}-${b}`);
    const { result } = renderHook(() => useCallbackRef(callback, []));

    expect(result.current(42, 'hello')).toBe('42-hello');
    expect(callback).toHaveBeenCalledWith(42, 'hello');
  });

  it('does not throw when callback is undefined and is not called', () => {
    const { result } = renderHook(() => useCallbackRef(undefined, []));

    expect(typeof result.current).toBe('function');
  });
});
