type Obj = Record<string, unknown>;

const getDeepObjectPropertyError = (path: string) => {
  throw new Error(
    `getDeepObjectProperty Error: path "${path}" don't exist in object`
  );
};

const getDeepObjectProperty = <T>(obj: Obj = {}, path: string): T => {
  const paths = path.split('.');

  const result = paths.reduce((nested, key) => {
    if (nested === undefined || typeof nested !== 'object')
      getDeepObjectPropertyError(path);

    return nested[key] as Obj;
  }, obj);

  return result as T;
};

export { getDeepObjectProperty };
