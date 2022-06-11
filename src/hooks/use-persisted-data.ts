import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { getStorageItem, setStorageItem } from 'utils';

type Return<T> = [T, Dispatch<SetStateAction<T>>];

const usePersistedState = <T>(key: string, initialState: T): Return<T> => {
  const [state, setState] = useState(() => {
    const storageValue = getStorageItem(key);

    return storageValue || initialState;
  });

  useEffect(() => {
    setStorageItem(key, state);
  }, [key, state]);

  return [state, setState];
};

export { usePersistedState };
