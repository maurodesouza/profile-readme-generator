import { CountApiKeys, HTTPMethods } from 'types';

const request = (method: HTTPMethods, key: string) =>
  fetch(`/api/count?key=${key}`, {
    method,
  });

const handle = (method: HTTPMethods) => (key: CountApiKeys) =>
  request(method, key);

const api = {
  put: handle(HTTPMethods.PUT),
  get: handle(HTTPMethods.GET),
};

export { api };
