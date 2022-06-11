import { config } from 'app';

import { getStorageItem, setStorageItem } from '.';

const storageTestKey = 'items';
const APP_KEY = config.general.storage.prefix;

describe('UTILS - Storage', () => {
  beforeEach(() => {
    window.localStorage.clear();

    global.window = window;
  });

  it('should return the item from local storage', () => {
    const items = ['1', '2'];

    const key = `${APP_KEY}:${storageTestKey}`;
    window.localStorage.setItem(key, JSON.stringify(items));

    const storagedItems = getStorageItem(storageTestKey);
    expect(storagedItems).toStrictEqual(items);
  });

  it('should add a item to local storage', () => {
    setStorageItem(storageTestKey, ['1', '2']);

    const storage = window.localStorage.getItem(`${APP_KEY}:${storageTestKey}`);

    expect(storage).toStrictEqual(JSON.stringify(['1', '2']));
  });

  it('should do nothing if window is undefined', () => {
    const window = global.window;

    Reflect.deleteProperty(global, 'window');

    setStorageItem(storageTestKey, ['1', '2']);

    let storage = window.localStorage.getItem(`${APP_KEY}:${storageTestKey}`);
    expect(storage).toBeNull();

    storage = getStorageItem(storageTestKey);
    expect(storage).toBeUndefined();
  });
});
