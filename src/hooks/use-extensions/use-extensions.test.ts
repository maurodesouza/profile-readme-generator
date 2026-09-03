import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';

import { extensionsStore } from '#/stores/extensions-store';

import { useExtensions } from './use-extensions';

describe('HOOK - useExtensions', () => {
  it('returns the extensionsStore singleton', () => {
    const { result } = renderHook(() => useExtensions());

    expect(result.current).toBe(extensionsStore);
  });
});
