import { describe, it, expect } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { useForceUpdate } from './use-force-update';

describe('HOOK - useForceUpdate', () => {
  it('returns a function', () => {
    const { result } = renderHook(() => useForceUpdate());

    expect(typeof result.current).toBe('function');
  });

  it('triggers a re-render when called', () => {
    let renderCount = 0;
    const { result } = renderHook(() => {
      renderCount++;
      return useForceUpdate();
    });

    expect(renderCount).toBe(1);

    act(() => {
      result.current();
    });

    expect(renderCount).toBe(2);
  });
});
