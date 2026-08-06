type Obj = Record<string, unknown>;

export function getDeepProperty<T>(obj: Obj = {}, path: string): T | undefined {
  const paths = path.split('.');

  const result = paths.reduce<Obj | undefined>((nested, key) => {
    if (nested === undefined || typeof nested !== 'object') return undefined;

    return nested[key] as Obj;
  }, obj);

  return result as T;
}
