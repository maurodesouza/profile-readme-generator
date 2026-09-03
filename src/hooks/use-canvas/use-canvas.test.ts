import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';

import { canvasStore } from '#/stores/canvas-store';

import { useCanvas } from './use-canvas';

describe('HOOK - useCanvas', () => {
  it('returns the canvasStore singleton', () => {
    const { result } = renderHook(() => useCanvas());

    expect(result.current).toBe(canvasStore);
  });

  it('returns the same store instance across re-renders', () => {
    const { result, rerender } = renderHook(() => useCanvas());

    const first = result.current;
    rerender();

    expect(result.current).toBe(first);
  });
});
