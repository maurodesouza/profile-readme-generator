import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import { config } from 'config';
import { Settings } from 'types';
import { deepChangeObjectProperty } from 'utils';
import { storage } from 'utils/storage';

const { preview: PREVIEW_SETTINGS, initial: INITIAL_SETTINGS } =
  config.general.settings;

class SettingsStore {
  settings: Settings = INITIAL_SETTINGS;
  __previewMode = false;

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'settings store',
      properties: ['settings'],
      storage,
    });
  }

  get $settings() {
    return { ...this.settings, ...(this.__previewMode && PREVIEW_SETTINGS) };
  }

  edit(path: string, value: unknown) {
    deepChangeObjectProperty<Settings>({
      obj: this.settings,
      path,
      value,
    });
  }

  applyPreview() {
    this.__previewMode = true;
  }

  resetPreview() {
    this.__previewMode = false;
  }
}

const settingsStore = new SettingsStore();

export { settingsStore };
