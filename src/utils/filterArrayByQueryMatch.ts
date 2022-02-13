const filterArrayByQueryMatch = <T extends Record<string, unknown> | string>(
  query: string,
  arr: T[] = [],
  fields: (keyof T)[] = []
) => {
  const regex = new RegExp(query, 'ig');

  return arr.filter(item => {
    if (typeof item === 'string') return item.match(regex);

    return fields.some(field => String(item[field]).match(regex));
  });
};

export { filterArrayByQueryMatch };
