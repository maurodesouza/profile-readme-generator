/**
 * Code copied from:
 * https://github.com/chakra-ui/chakra-ui/blob/1a753d53ecfd543dc61279f1618b0d8526325409/packages/react/src/hooks/use-callback-ref.ts
 */

'use client';

import { useCallback, useInsertionEffect, useRef } from 'react';

export function useCallbackRef<Args extends unknown[], Return>(
  callback: ((...args: Args) => Return) | undefined,
  deps: React.DependencyList = []
) {
  const callbackRef = useRef<typeof callback>(() => {
    throw new Error('Cannot call an event handler while rendering.');
  });

  useInsertionEffect(() => {
    callbackRef.current = callback;
  });

  return useCallback((...args: Args) => callbackRef.current?.(...args), deps);
}
