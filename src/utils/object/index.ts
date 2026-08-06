import { changeDeepProperty } from './change-deep-property';
import { checkDeepProperty } from './check-deep-property';
import { getDeepProperty } from './get-deep-property';
import { toQueryParams } from './to-query-params';

const deep = {
  get: getDeepProperty,
  set: changeDeepProperty,
  check: checkDeepProperty,
};

export const object = { deep, toQueryParams };

export { getDeepProperty } from './get-deep-property';
export { changeDeepProperty } from './change-deep-property';
export { checkDeepProperty } from './check-deep-property';
export { toQueryParams } from './to-query-params';
