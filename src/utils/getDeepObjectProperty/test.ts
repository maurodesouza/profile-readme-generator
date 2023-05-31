import { getDeepObjectProperty } from '.';

describe('UTILS - Get deep object property', () => {
  const objInput = {
    prop1: 'some1',
    prop2: 'some2',
    prop3: 'some3',
    prop4: {
      key1: 'some1',
      key2: 'some2',
      key3: {
        prop1: 'some1',
        prop2: 'some2',
        prop3: 'some3',
      },
    },
  };

  it('should return the correct value', () => {
    const inputs = [
      {
        path: 'prop1',
        expected: 'some1',
      },
      {
        path: 'prop4.key1',
        expected: 'some1',
      },
      {
        path: 'prop4.key3.prop3',
        expected: 'some3',
      },
      {
        path: 'some',
        expected: undefined,
      },
    ];

    inputs.forEach(input => {
      const result = getDeepObjectProperty(objInput, input.path);

      expect(result).toStrictEqual(input.expected);
    });
  });

  it('should use an empty object case no one was passed', () => {
    const inputs = [
      {
        path: 'prop1',
        expected: undefined,
      },
      {
        path: 'some1',
        expected: undefined,
      },
    ];

    inputs.forEach(input => {
      const result = getDeepObjectProperty(undefined, input.path);

      expect(result).toStrictEqual(input.expected);
    });
  });

  it('should return undefined when passing a wrong object path', () => {
    const inputs = ['wrong.path', 'prop1.wrong.path', 'prop4.key1.wrong.path'];

    const fn = (path: string) => getDeepObjectProperty(objInput, path);

    inputs.forEach(path => expect(fn(path)).toBeUndefined());
  });
});
