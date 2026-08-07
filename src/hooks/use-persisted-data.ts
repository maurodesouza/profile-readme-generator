'use client';

import { fn } from '#/utils/fn';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type Return<T> = [T, Dispatch<SetStateAction<T>>];

const usePersistedState = <T>(key: string, initialState: T): Return<T> => {
  const [state, setState] = useState<T>(() => {
    const storageValue = fn.storage.getItem(key);

    if (!storageValue) return initialState;

    try {
      return JSON.parse(storageValue) as T;
    } catch {
      return initialState;
    }
  });

  useEffect(() => {
    fn.storage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export { usePersistedState };
