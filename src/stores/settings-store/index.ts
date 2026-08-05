import { makeAutoObservable } from 'mobx';

import { config } from 'config';
import { Settings } from 'types';
import { deepChangeObjectProperty } from 'utils';

const { preview: PREVIEW_SETTINGS, initial: INITIAL_SETTINGS } =
  config.general.settings;

class SettingsStore {
  #settings: Settings = INITIAL_SETTINGS;
  #previewMode = false;

  constructor() {
    makeAutoObservable(this);
  }

  get $settings() {
    return { ...this.#settings, ...(this.#previewMode && PREVIEW_SETTINGS) };
  }

  edit(path: string, value: unknown) {
    deepChangeObjectProperty<Settings>({
      obj: this.#settings,
      path,
      value,
    });
  }

  applyPreview() {
    this.#previewMode = true;
  }

  resetPreview() {
    this.#previewMode = false;
  }
}

const settingsStore = new SettingsStore();

export { SettingsStore, settingsStore };
