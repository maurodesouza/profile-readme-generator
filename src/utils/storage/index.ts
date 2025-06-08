import { config } from 'config';

export const getStorageItem = (key: string) => {
  if (typeof window === 'undefined') return;
  const app_key = config.general.storage.prefix;

  const data = window.localStorage.getItem(`${app_key}:${key}`);
  return JSON.parse(data!);
};

export const setStorageItem = (key: string, value: unknown[]) => {
  if (typeof window === 'undefined') return;
  const app_key = config.general.storage.prefix;

  const data = JSON.stringify(value);
  window.localStorage.setItem(`${app_key}:${key}`, data);
};
