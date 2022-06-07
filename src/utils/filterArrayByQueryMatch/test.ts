import { filterArrayByQueryMatch } from '.';

describe('UTILS - Filter array by query match', () => {
  const objectArray = [
    {
      key: 'test',
      key2: 'thinking',
    },
    {
      key: 'testing',
      key2: 'some',
    },
    {
      key: 'other',
      key2: 'dog',
    },
    {
      key: 'making',
      key2: 'cat',
    },
    {
      key: 'arrives',
      key2: 'coming',
    },
  ];

  const stringArray = objectArray.map(obj => obj.key);

  const inputs = [
    {
      query: 'test',
      expected: {
        one_field: 2,
        two_fields: 2,
      },
    },
    {
      query: 'ing',
      expected: {
        one_field: 2,
        two_fields: 4,
      },
    },
    {
      query: 'e',
      expected: {
        one_field: 4,
        two_fields: 4,
      },
    },
    {
      query: 't',
      expected: {
        one_field: 3,
        two_fields: 4,
      },
    },
    {
      query: 'asd',
      expected: {
        one_field: 0,
        two_fields: 0,
      },
    },
  ];

  it('should filter an array of objects by query', () => {
    inputs.forEach(input => {
      const { expected, query } = input;

      const result1 = filterArrayByQueryMatch(query, objectArray, ['key']);
      const result2 = filterArrayByQueryMatch(query, objectArray, [
        'key',
        'key2',
      ]);

      expect(result1).toHaveLength(expected.one_field);
      expect(result2).toHaveLength(expected.two_fields);
    });
  });

  it('should filter a array of strings by query', () => {
    inputs.forEach(input => {
      const { expected, query } = input;

      const result = filterArrayByQueryMatch(query, stringArray);

      expect(result).toHaveLength(expected.one_field);
    });
  });

  it('should not filter an array of objects by query if an object key is not specified', () => {
    inputs.forEach(input => {
      const { query } = input;

      const result = filterArrayByQueryMatch(query, objectArray);

      expect(result).toHaveLength(0);
    });
  });

  it('should not filter an array if an array is not specified', () => {
    inputs.forEach(input => {
      const { query } = input;

      const result = filterArrayByQueryMatch(query, undefined);

      expect(result).toHaveLength(0);
    });
  });
});
