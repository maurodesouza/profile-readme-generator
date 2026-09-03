import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render } from '@testing-library/react';
import { runInAction } from 'mobx';

import { command } from '#/lib/command';
import { extensionsStore } from '#/stores/extensions-store';
import { PanelsEnum, Sections } from '#/types';

import { ExtensionsHandle } from '#/components/handles/extensions';

import { defaultMusicSectionConfig } from '../default-config';

function resetExtensionsStore() {
  runInAction(() => {
    extensionsStore.extensions = {};
    extensionsStore.registers = {};
  });
}

describe('FEATURE - music index (registration)', () => {
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

  it('registers the music feature with id Sections.MUSIC', () => {
    expect(extensionsStore.registers[Sections.MUSIC]).toBeDefined();
    expect(extensionsStore.registers[Sections.MUSIC].id).toBe(Sections.MUSIC);
  });

  it('registers the NEW_SECTION presentation with icon and name', () => {
    const newSection =
      extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[Sections.MUSIC];

    expect(newSection).toBeDefined();
    expect(newSection.icon).toBe('music');
    expect(newSection.name).toBe('Music');
  });

  it('registers the sections parser and defaultConfig', () => {
    const register = extensionsStore.registers[Sections.MUSIC];
    const sections = register.presentation.sections as any;

    expect(typeof sections.parser.readme).toBe('function');
    expect(sections.defaultConfig).toEqual(defaultMusicSectionConfig);
  });

  it('onClick dispatches canvas.section.add with Sections.MUSIC', () => {
    const newSection =
      extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[Sections.MUSIC];

    newSection.onClick();

    expect(addHandler).toHaveBeenCalledWith(Sections.MUSIC);
  });
});
