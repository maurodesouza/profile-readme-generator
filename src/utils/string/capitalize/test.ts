import { describe, it, expect } from 'vitest';

import { capitalize } from '.';

describe('UTILS - Capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    const inputs = [
      { value: 'hello', expected: 'Hello' },
      { value: 'Hello', expected: 'Hello' },
      { value: 'a long sentence', expected: 'A long sentence' },
      { value: '', expected: '' },
      { value: '1number', expected: '1number' },
    ];

    inputs.forEach(({ value, expected }) => {
      expect(capitalize(value)).toBe(expected);
    });
  });
});
