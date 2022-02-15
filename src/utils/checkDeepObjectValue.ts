import { getDeepObjectProperty } from './getDeepObjectProperty';

const operators = {
  equal: '===',
};

type checkDeepObjectValueArgs<T> = {
  obj?: T;
  path: string;
  be: keyof typeof operators;
  value: unknown;
};

const checkDeepObjectValue = <T extends Record<string, unknown>>({
  obj = {} as T,
  path,
  be,
  value,
}: checkDeepObjectValueArgs<T>): boolean => {
  const property = getDeepObjectProperty(obj, path);

  return eval(`'${property}' ${operators[be]} '${value}'`);
};

export { checkDeepObjectValue };
