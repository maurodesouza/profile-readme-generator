import { config } from 'config';

const app_key = config.general.storage.prefix;

export const storage = {
  setItem: (key: string, value: string) => {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(`${app_key}:${key}`, value);
  },
  getItem: (key: string): string | null => {
    if (typeof window === 'undefined') return null;
    return window.localStorage.getItem(`${app_key}:${key}`);
  },
  removeItem: (key: string) => {
    if (typeof window === 'undefined') return;
    window.localStorage.removeItem(`${app_key}:${key}`);
  },
};
