import { runInAction } from 'mobx';
import { beforeEach, describe, expect, it } from 'vitest';

import { settingsStore } from '.';
import { config } from '#/config';

const { initial: INITIAL_SETTINGS, preview: PREVIEW_SETTINGS } =
  config.general.settings;

function resetSettingsStore() {
  window.localStorage.clear();

  runInAction(() => {
    settingsStore.settings = { ...INITIAL_SETTINGS };
    settingsStore.__previewMode = false;
  });
}

describe('SettingsStore', () => {
  beforeEach(resetSettingsStore);

  it('$settings returns the initial settings normally', () => {
    expect(settingsStore.$settings).toEqual(INITIAL_SETTINGS);
  });

  it('$settings merges preview values when preview mode is active', () => {
    runInAction(() => {
      settingsStore.__previewMode = true;
    });

    expect(settingsStore.$settings).toEqual({
      ...INITIAL_SETTINGS,
      ...PREVIEW_SETTINGS,
    });
  });

  it('edit applies a deep path update', () => {
    settingsStore.edit('user.github', 'testuser');

    expect(settingsStore.settings.user.github).toBe('testuser');
  });

  it('edit can replace a top-level path', () => {
    settingsStore.edit('user', { github: 'another' });

    expect(settingsStore.settings.user).toEqual({ github: 'another' });
  });

  it('applyPreview and resetPreview toggle the preview state', () => {
    settingsStore.applyPreview();
    expect(settingsStore.__previewMode).toBe(true);

    settingsStore.resetPreview();
    expect(settingsStore.__previewMode).toBe(false);
  });
});
