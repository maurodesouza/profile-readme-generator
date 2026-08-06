import { getDeepProperty } from '../get-deep-property';

const operators = {
  equal: (a: unknown, b: unknown): boolean => a === b,
};

type checkDeepObjectValueArgs<T> = {
  obj?: T;
  path: string;
  be: keyof typeof operators;
  value: unknown;
};

const checkDeepProperty = <T extends Record<string, unknown>>({
  obj,
  path,
  be,
  value,
}: checkDeepObjectValueArgs<T>): boolean => {
  const property = getDeepProperty(obj, path);
  const handler = operators[be];

  return handler ? handler(property, value) : false;
};

export { checkDeepProperty };
