import { render } from '@testing-library/react';
import { runInAction } from 'mobx';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import { actions } from '#/lib/command';
import { extensionsStore } from '#/stores/extensions-store';
import { Extension } from '#/types';

import { ExtensionsHandle } from '.';

const extensionA: Extension = {
  id: 'a',
  presentation: { sections: { text: {} } },
};

const extensionB: Extension = {
  id: 'b',
  presentation: {
    sections: { music: {} },
    widgets: { badge: {} },
  },
};

function resetExtensionsStore() {
  runInAction(() => {
    extensionsStore.extensions = {};
    extensionsStore.registers = {};
  });
}

describe('ExtensionsHandle', () => {
  let unmount: () => void;

  beforeEach(() => {
    resetExtensionsStore();
    ({ unmount } = render(<ExtensionsHandle />));
  });

  afterEach(() => {
    unmount();
  });

  it('registers a single extension', async () => {
    await actions.extensions.register(extensionA);

    expect(extensionsStore.registers.a).toEqual(extensionA);
    expect(extensionsStore.extensions.sections.a).toEqual({ text: {} });
  });

  it('registers an array of extensions', async () => {
    await actions.extensions.register([extensionA, extensionB]);

    expect(extensionsStore.registers.a).toEqual(extensionA);
    expect(extensionsStore.registers.b).toEqual(extensionB);
    expect(extensionsStore.extensions.sections.a).toEqual({ text: {} });
    expect(extensionsStore.extensions.sections.b).toEqual({ music: {} });
    expect(extensionsStore.extensions.widgets.b).toEqual({ badge: {} });
  });

  it('merges multiple registrations without overwriting unrelated groups', async () => {
    await actions.extensions.register(extensionA);
    await actions.extensions.register(extensionB);

    expect(extensionsStore.registers.a).toEqual(extensionA);
    expect(extensionsStore.registers.b).toEqual(extensionB);
    expect(extensionsStore.extensions.sections.a).toEqual({ text: {} });
    expect(extensionsStore.extensions.sections.b).toEqual({ music: {} });
    expect(extensionsStore.extensions.widgets.b).toEqual({ badge: {} });
  });
});
