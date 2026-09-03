import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';

import { settingsStore } from '#/stores/settings-store';

import { useSettings } from './use-settings';

describe('HOOK - useSettings', () => {
  it('returns the settingsStore singleton', () => {
    const { result } = renderHook(() => useSettings());

    expect(result.current).toBe(settingsStore);
  });
});
