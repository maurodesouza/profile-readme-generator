import { checkDeepObjectValue } from '.';

describe('UTILS - Check deep object value', () => {
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

  it('should return the correct result', () => {
    const inputs = [
      {
        path: 'prop1',
        value: 'some1',
        expected: true,
      },
      {
        path: 'prop1',
        value: 'some2',
        expected: false,
      },
      {
        path: 'prop4.key3.prop3',
        value: 'some3',
        expected: true,
      },
      {
        path: 'prop4.key3.prop3',
        value: 'some1',
        expected: false,
      },
      {
        path: 'empty',
        value: undefined,
        expected: true,
      },
    ];

    inputs.forEach(input => {
      const { expected, ...rest } = input;

      const result = checkDeepObjectValue({
        obj: objInput,
        be: 'equal',
        ...rest,
      });

      const method = expected ? 'toBeTruthy' : 'toBeFalsy';

      expect(result)[method];
    });
  });
});
