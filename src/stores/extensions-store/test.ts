import { runInAction } from 'mobx';
import { beforeEach, describe, expect, it } from 'vitest';

import { extensionsStore } from '.';
import { Extension } from '#/types';

const exampleExtension: Extension = {
  id: 'ext-1',
  presentation: {
    sections: { text: { defaultConfig: { props: { content: {} } } } },
  },
};

function resetExtensionsStore() {
  runInAction(() => {
    extensionsStore.extensions = {};
    extensionsStore.registers = {};
  });
}

describe('ExtensionsStore', () => {
  beforeEach(resetExtensionsStore);

  it('starts with empty registers and extensions', () => {
    expect(extensionsStore.registers).toEqual({});
    expect(extensionsStore.extensions).toEqual({});
  });

  it('holds a registered extension by id', () => {
    runInAction(() => {
      extensionsStore.registers = { 'ext-1': exampleExtension };
    });

    expect(extensionsStore.registers['ext-1']).toEqual(exampleExtension);
  });

  it('groups extensions by presentation key under extension id', () => {
    runInAction(() => {
      extensionsStore.extensions = {
        sections: { 'ext-1': exampleExtension.presentation.sections },
      };
    });

    expect(extensionsStore.extensions.sections['ext-1']).toEqual(
      exampleExtension.presentation.sections
    );
  });
});
