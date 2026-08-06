import { changeDeepProperty } from './change-deep-property';
import { checkDeepValue } from './check-deep-value';
import { getDeepProperty } from './get-deep-property';
import { toQueryParams } from './to-query-params';

const deep = {
  get: getDeepProperty,
  set: changeDeepProperty,
  check: checkDeepValue,
};

export const object = { deep, toQueryParams };

export { getDeepProperty } from './get-deep-property';
export { changeDeepProperty } from './change-deep-property';
export { checkDeepValue } from './check-deep-value';
export { toQueryParams } from './to-query-params';
