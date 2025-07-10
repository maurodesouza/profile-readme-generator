import { getDeepObjectProperty } from '../getDeepObjectProperty';

const operators = {
  equal: (a: unknown, b: unknown): boolean => a === b,
};

type checkDeepObjectValueArgs<T> = {
  obj?: T;
  path: string;
  be: keyof typeof operators;
  value: unknown;
};

const checkDeepObjectValue = <T extends Record<string, unknown>>({
  obj,
  path,
  be,
  value,
}: checkDeepObjectValueArgs<T>): boolean => {
  const property = getDeepObjectProperty(obj, path);
  const handler = operators[be];

  return handler ? handler(property, value) : false;
};

export { checkDeepObjectValue };
