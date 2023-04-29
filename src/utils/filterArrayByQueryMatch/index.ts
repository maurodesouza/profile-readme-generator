const filterArrayByQueryMatch = <T extends Record<string, unknown> | string>(
  query: string,
  arr: T[] = [],
  fields: (keyof T)[] = []
) => {
  const normalizedQuery = query.toLowerCase();

  const check = (value: unknown) =>
    String(value).toLowerCase().includes(normalizedQuery);

  return arr.filter(item => {
    if (typeof item === 'string') return check(item);

    return fields.some(field => check(item[field]));
  });
};

export { filterArrayByQueryMatch };
