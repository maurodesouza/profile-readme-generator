import { debounce } from '.';
import { describe, it, expect, vi } from 'vitest';

vi.useFakeTimers();

describe('UTILS - Debounce', () => {
  it('should call the function just one time with the correct args', () => {
    const fn = vi.fn();
    const args = { arg1: 'some', arg2: true };

    const func = debounce(fn);

    func(args);
    func(args);
    func(args);

    vi.runAllTimers();

    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith(args);
  });
});
