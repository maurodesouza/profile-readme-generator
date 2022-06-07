import { objectToQueryParams } from '.';

describe('UTILS - Object to query params', () => {
  it('should correctly format an object to query params format', () => {
    const inputs = [
      {
        obj: {
          foo: 'bla',
          test: 'passing',
        },
        expected: 'foo=bla&test=passing',
      },
      {
        obj: {
          arg1: 'some1',
          arg2: 'some2',
          arg3: 'some3',
        },
        expected: 'arg1=some1&arg2=some2&arg3=some3',
      },
      {
        obj: {},
        expected: '',
      },
    ];

    inputs.forEach(input => {
      const result = objectToQueryParams(input.obj);

      expect(result).toBe(input.expected);
    });
  });

  it('should exclude query value if false', () => {
    const input = {
      arg1: 'some1',
      arg2: '',
      arg3: 'some3',
      arg4: 0,
    };

    const expected = 'arg1=some1&arg3=some3';
    const result = objectToQueryParams(input);

    expect(result).toBe(expected);
  });

  it('should not exclude query value if false', () => {
    const input = {
      arg1: 'some1',
      arg2: '',
      arg3: 'some3',
      arg4: 0,
    };

    const expected = 'arg1=some1&arg2=&arg3=some3&arg4=0';
    const result = objectToQueryParams(input, false);

    expect(result).toBe(expected);
  });
});
