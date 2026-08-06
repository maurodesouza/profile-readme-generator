type Obj = Record<string, unknown>;

type DeepChangeObjectPropertyArgs<T extends Obj = Obj> = {
  obj: T;
  path: string;
  value: unknown;
};

const deepChangeObjectPropertyError = (path: string) => {
  throw new Error(
    `deepChangeProperty Error: path "${path}" don't exist in object`
  );
};

const deepChangeProperty = <T extends Obj = Obj>({
  obj,
  path,
  value,
}: DeepChangeObjectPropertyArgs<T>): T => {
  const paths = path.split('.');

  const isToRemoveProp = value === undefined;

  const result = paths.reduce((nested, key, index) => {
    if (nested === undefined || typeof nested !== 'object')
      deepChangeObjectPropertyError(path);

    const finalNested = index === paths.length - 1;

    if (finalNested) {
      return (
        isToRemoveProp
          ? Reflect.deleteProperty(nested, key)
          : (nested[key] = value),
        obj
      );
    }

    if (nested[key] === undefined || typeof nested[key] !== 'object')
      nested[key] = {};

    return nested[key] as T;
  }, obj as Obj);

  return result as T;
};

export { deepChangeProperty };
