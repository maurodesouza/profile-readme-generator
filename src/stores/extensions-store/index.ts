import { makeAutoObservable } from 'mobx';

import { Extension, ExtensionsGroup } from 'types';

class ExtensionsStore {
  extensions: ExtensionsGroup = {};
  registers: Record<string, Extension> = {};

  constructor() {
    makeAutoObservable(this);
  }
}

const extensionsStore = new ExtensionsStore();

export { extensionsStore };
