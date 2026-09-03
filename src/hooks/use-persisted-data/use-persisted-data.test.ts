import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';

import { fn } from '#/utils/fn';

import { usePersistedState } from './use-persisted-data';

const STORAGE_PREFIX = '@prg-ms';

describe('HOOK - usePersistedState', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  afterEach(() => {
    window.localStorage.clear();
    vi.restoreAllMocks();
  });

  it('initializes from localStorage when a value exists', () => {
    fn.storage.setItem('test-key', JSON.stringify({ name: 'stored' }));

    const { result } = renderHook(() =>
      usePersistedState('test-key', { name: 'default' })
    );

    expect(result.current[0]).toEqual({ name: 'stored' });
  });

  it('falls back to the initial state when storage is empty', () => {
    const { result } = renderHook(() =>
      usePersistedState('empty-key', { name: 'default' })
    );

    expect(result.current[0]).toEqual({ name: 'default' });
  });

  it('falls back to the initial state when JSON parsing fails', () => {
    window.localStorage.setItem(`${STORAGE_PREFIX}:bad-json`, 'not-json{');

    const { result } = renderHook(() =>
      usePersistedState('bad-json', { name: 'default' })
    );

    expect(result.current[0]).toEqual({ name: 'default' });
  });

  it('persists state changes to localStorage', () => {
    const { result } = renderHook(() =>
      usePersistedState('persist-key', { count: 0 })
    );

    act(() => {
      result.current[1]({ count: 5 });
    });

    expect(result.current[0]).toEqual({ count: 5 });
    expect(fn.storage.getItem('persist-key')).toBe(
      JSON.stringify({ count: 5 })
    );
  });
});
