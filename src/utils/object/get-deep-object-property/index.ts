type Obj = Record<string, unknown>;

const getDeepObjectProperty = <T>(
  obj: Obj = {},
  path: string
): T | undefined => {
  const paths = path.split('.');

  const result = paths.reduce<Obj | undefined>((nested, key) => {
    if (nested === undefined || typeof nested !== 'object') return undefined;

    return nested[key] as Obj;
  }, obj);

  return result as T;
};

export { getDeepObjectProperty };
