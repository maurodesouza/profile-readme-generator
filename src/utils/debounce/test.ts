import { debounce } from '.';

jest.useFakeTimers();

describe('UTILS - Debounce', () => {
  it('should call the function just one time with the correct args', () => {
    const fn = jest.fn();
    const args = { arg1: 'some', arg2: true };

    const func = debounce(fn);

    func(args);
    func(args);
    func(args);

    jest.runAllTimers();

    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith(args);
  });
});
