type Obj = Record<string, unknown>;

type DeepChangeObjectPropertyArgs<T extends Obj = Obj> = {
  obj: T;
  path: string;
  value: unknown;
};

const deepChangeObjectPropertyError = (path: string) => {
  throw new Error(
    `deepChangeObjectProperty Error: path "${path}" don't exist in object`
  );
};

const deepChangeObjectProperty = <T extends Obj = Obj>({
  obj,
  path,
  value,
}: DeepChangeObjectPropertyArgs<T>): T => {
  const paths = path.split('.');
  const objClone = JSON.parse(JSON.stringify(obj)) as T;

  const result = paths.reduce((nested, key, index) => {
    if (nested === undefined || typeof nested !== 'object')
      deepChangeObjectPropertyError(path);

    const finalNested = index === paths.length - 1;

    if (finalNested) return (nested[key] = value), objClone;

    return nested[key] as T;
  }, objClone as Obj);

  return result as T;
};

export { deepChangeObjectProperty };
