const objectToQueryParams = (
  queries: Record<string, unknown>,
  excludeFalseValue = true
) => {
  const result = Object.entries(queries).reduce((query, [key, value]) => {
    if (
      excludeFalseValue &&
      !value &&
      ['string', 'number'].includes(typeof value)
    )
      return query;

    return `${query}${key}=${encodeURI(String(value))}&`;
  }, '');

  return result.slice(0, -1);
};

export { objectToQueryParams };
