import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render } from '@testing-library/react';
import { runInAction } from 'mobx';

import { command } from '#/lib/command';
import { extensionsStore } from '#/stores/extensions-store';
import { PanelsEnum, Sections } from '#/types';

import { ExtensionsHandle } from '#/components/handles/extensions';

import { defaultImageSectionConfig } from '../default-config';

function resetExtensionsStore() {
  runInAction(() => {
    extensionsStore.extensions = {};
    extensionsStore.registers = {};
  });
}

describe('FEATURE - image index (registration)', () => {
  let unmount: () => void;
  let disposeAdd: () => void;
  const addHandler = vi.fn();

  beforeAll(async () => {
    resetExtensionsStore();
    ({ unmount } = render(<ExtensionsHandle />));
    disposeAdd = command.handle('canvas.section.add', addHandler);
    await import('../index');
  });

  afterAll(() => {
    unmount();
    disposeAdd();
    resetExtensionsStore();
  });

  it('registers the image feature with id Sections.IMAGE', () => {
    expect(extensionsStore.registers[Sections.IMAGE]).toBeDefined();
    expect(extensionsStore.registers[Sections.IMAGE].id).toBe(Sections.IMAGE);
  });

  it('registers the NEW_SECTION presentation with icon and name', () => {
    const newSection =
      extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[Sections.IMAGE];

    expect(newSection).toBeDefined();
    expect(newSection.icon).toBe('image');
    expect(newSection.name).toBe('Image');
  });

  it('registers the sections parser and defaultConfig', () => {
    const register = extensionsStore.registers[Sections.IMAGE];
    const sections = register.presentation.sections as any;

    expect(typeof sections.parser.readme).toBe('function');
    expect(sections.defaultConfig).toEqual(defaultImageSectionConfig);
  });

  it('onClick dispatches canvas.section.add with Sections.IMAGE', () => {
    const newSection =
      extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[Sections.IMAGE];

    newSection.onClick();

    expect(addHandler).toHaveBeenCalledWith(Sections.IMAGE);
  });
});
