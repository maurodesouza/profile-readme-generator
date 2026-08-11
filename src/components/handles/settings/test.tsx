import { render } from '@testing-library/react';
import { runInAction } from 'mobx';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { actions } from '#/lib/command';
import { config } from '#/config';
import { settingsStore } from '#/stores/settings-store';

import { SettingsHandle } from '.';

const { initial: INITIAL_SETTINGS, preview: PREVIEW_SETTINGS } =
  config.general.settings;

function resetSettingsStore() {
  window.localStorage.clear();

  runInAction(() => {
    settingsStore.settings = { ...INITIAL_SETTINGS };
    settingsStore.__previewMode = false;
  });
}

describe('SettingsHandle', () => {
  let unmount: () => void;

  beforeEach(() => {
    resetSettingsStore();
    ({ unmount } = render(<SettingsHandle />));
  });

  afterEach(() => {
    unmount();
  });

  it('dispatches settings.edit and updates a nested path', async () => {
    await actions.settings.edit({ path: 'user.github', value: 'new' });

    expect(settingsStore.settings.user.github).toBe('new');
  });

  it('dispatches settings.preview.apply and activates preview mode', async () => {
    await actions.settings.preview.apply();

    expect(settingsStore.__previewMode).toBe(true);
    expect(settingsStore.$settings).toEqual({
      ...INITIAL_SETTINGS,
      ...PREVIEW_SETTINGS,
    });
  });

  it('dispatches settings.preview.reset and deactivates preview mode', async () => {
    runInAction(() => {
      settingsStore.__previewMode = true;
    });

    await actions.settings.preview.reset();

    expect(settingsStore.__previewMode).toBe(false);
    expect(settingsStore.$settings).toEqual(INITIAL_SETTINGS);
  });
});
