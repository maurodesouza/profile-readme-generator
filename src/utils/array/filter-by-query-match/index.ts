const filterByQueryMatch = <T extends Record<string, unknown> | string>(
  query: string,
  arr: T[] = [],
  fields: (keyof T)[] = []
) => {
  const normalizedQuery = query.toLowerCase();

  const check = (value: unknown): boolean => {
    if (Array.isArray(value))
      return !!filterByQueryMatch<string>(query, value).length;

    return String(value).toLowerCase().includes(normalizedQuery);
  };

  return arr.filter(item => {
    if (typeof item === 'string') return check(item);

    return fields.some(field => check(item[field]));
  });
};

export { filterByQueryMatch };
