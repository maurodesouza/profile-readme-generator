import { getDeepObjectProperty } from '..';
import { deepChangeObjectProperty } from '.';

describe('UTILS - Deep change object property', () => {
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

  it('should return the value that is passed as an argument', () => {
    const inputs = [
      {
        path: 'prop1',
        value: 'some1',
      },
      {
        path: 'prop4.key1',
        value: 'some1',
      },
      {
        path: 'prop4.key3.prop3',
        value: 'some3',
      },
      {
        path: 'prop2',
        value: undefined,
      },
    ];

    inputs.forEach(input => {
      const { path, value } = input;

      const newObject = deepChangeObjectProperty({
        obj: objInput,
        path,
        value,
      });

      const result = getDeepObjectProperty(newObject, path);

      expect(result).toStrictEqual(value);
    });
  });

  it('should create the path when passing a nonexistent object path', () => {
    const inputs = ['wrong.path', 'prop1.wrong.path', 'prop4.key1.wrong.path'];
    const value = 'some';

    const fn = (path: string) =>
      deepChangeObjectProperty({ obj: objInput, path, value });

    inputs.forEach(path => {
      const finded = getDeepObjectProperty(fn(path), path);

      expect(finded).toBe(value);
    });
  });
});
