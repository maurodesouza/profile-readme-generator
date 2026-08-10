import { config } from '#/config';
import { describe, it, expect, beforeEach } from 'vitest';

import { storage } from '.';

const storageTestKey = 'items';
const APP_KEY = config.general.storage.prefix;

describe('UTILS - Storage', () => {
  beforeEach(() => {
    window.localStorage.clear();

    global.window = window;
  });

  it('should return the item from local storage', () => {
    const items = JSON.stringify(['1', '2']);

    const key = `${APP_KEY}:${storageTestKey}`;
    window.localStorage.setItem(key, items);

    const storagedItems = storage.getItem(storageTestKey);
    expect(storagedItems).toStrictEqual(items);
  });

  it('should add a item to local storage', () => {
    const value = JSON.stringify(['1', '2']);

    storage.setItem(storageTestKey, value);

    const storedValue = window.localStorage.getItem(
      `${APP_KEY}:${storageTestKey}`
    );

    expect(storedValue).toStrictEqual(value);
  });

  it('should remove the item from local storage', () => {
    const key = `${APP_KEY}:${storageTestKey}`;
    window.localStorage.setItem(key, 'value');

    storage.removeItem(storageTestKey);

    expect(window.localStorage.getItem(key)).toBeNull();
  });

  it('should do nothing if window is undefined', () => {
    const win = global.window;

    Reflect.deleteProperty(global, 'window');

    const value = JSON.stringify(['1', '2']);
    storage.setItem(storageTestKey, value);

    let storedValue = win.localStorage.getItem(`${APP_KEY}:${storageTestKey}`);
    expect(storedValue).toBeNull();

    storedValue = storage.getItem(storageTestKey);
    expect(storedValue).toBeNull();

    storage.removeItem(storageTestKey);
    storedValue = win.localStorage.getItem(`${APP_KEY}:${storageTestKey}`);
    expect(storedValue).toBeNull();

    global.window = win;
  });
});
