import { toArray } from '.';
import { describe, it, expect } from 'vitest';

describe('UTILS - To array ', () => {
  it.each(['1', 1, undefined, null, {}, [], true, false])(
    'should return an array ',
    value => {
      const result = toArray(value);
      const isArray = Array.isArray(result);

      expect(isArray).toBeTruthy();
    }
  );
});
