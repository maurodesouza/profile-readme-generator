const objectToQueryParams = (queries: Record<string, unknown>) => {
  const result = Object.entries(queries).reduce((query, [key, value]) => {
    if (!value && ['string', 'number'].includes(typeof value)) return query;

    return `${query}&${key}=${value}`;
  }, '');

  return result;
};

export { objectToQueryParams };
