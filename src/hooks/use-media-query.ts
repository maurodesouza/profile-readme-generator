/**
 * Code copied from:
 * https://github.com/chakra-ui/chakra-ui/blob/1a753d53ecfd543dc61279f1618b0d8526325409/packages/react/src/hooks/use-media-query.ts
 */

'use client';

import { useEffect, useState } from 'react';
import { useCallbackRef } from './use-callback-ref';
import { toArray } from 'utils';

type MediaQueryCallback = (event: MediaQueryListEvent) => void;

function listen(query: MediaQueryList, callback: MediaQueryCallback) {
  try {
    query.addEventListener('change', callback);
    return () => query.removeEventListener('change', callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}

export interface UseMediaQueryOptions {
  fallback?: boolean[];
  ssr?: boolean;
  getWindow?(): typeof window;
}

export function useMediaQuery(
  query: string | string[],
  options: UseMediaQueryOptions = {}
): boolean[] {
  const { fallback: _fallback = [], ssr = true, getWindow } = options;
  const getWin = useCallbackRef(getWindow);

  const queries = toArray(query);

  const fallback = _fallback?.filter(v => v != null) as boolean[];

  const [value, setValue] = useState(() => {
    return queries.map((query, index) => {
      if (!ssr) {
        const { media, matches } = (getWindow?.() ?? window).matchMedia(query);
        return { media, matches };
      }
      return { media: query, matches: !!fallback[index] };
    });
  });

  useEffect(() => {
    const win = getWin() ?? window;
    setValue(prev => {
      const current = queries.map(query => {
        const { media, matches } = win.matchMedia(query);
        return { media, matches };
      });

      return prev.every(
        (v, i) =>
          v.matches === current[i].matches && v.media === current[i].media
      )
        ? prev
        : current;
    });

    const mql = queries.map(query => win.matchMedia(query));

    const handler = (evt: MediaQueryListEvent) => {
      setValue(prev => {
        return prev.slice().map(item => {
          if (item.media === evt.media)
            return { ...item, matches: evt.matches };
          return item;
        });
      });
    };

    const cleanups = mql.map(v => listen(v, handler));
    return () => cleanups.forEach(fn => fn());
  }, [getWin]);

  return value.map(item => item.matches);
}
