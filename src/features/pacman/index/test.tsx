import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render } from '@testing-library/react';
import { runInAction } from 'mobx';

import { command } from '#/lib/command';
import { extensionsStore } from '#/stores/extensions-store';
import { PanelsEnum, Sections } from '#/types';

import { ExtensionsHandle } from '#/components/handles/extensions';

import { defaultPacmanSectionConfig } from '../default-config';

function resetExtensionsStore() {
  runInAction(() => {
    extensionsStore.extensions = {};
    extensionsStore.registers = {};
  });
}

describe('FEATURE - pacman index (registration)', () => {
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

  it('registers the pacman feature with id Sections.PACMAN', () => {
    expect(extensionsStore.registers[Sections.PACMAN]).toBeDefined();
    expect(extensionsStore.registers[Sections.PACMAN].id).toBe(Sections.PACMAN);
  });

  it('registers the NEW_SECTION presentation with icon and name', () => {
    const newSection = extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[
      Sections.PACMAN
    ] as any;

    expect(newSection).toBeDefined();
    expect(newSection.icon).toBe('ghost');
    expect(newSection.name).toBe('Arcade games');
  });

  it('registers the sections readme and workflow parsers and defaultConfig', () => {
    const register = extensionsStore.registers[Sections.PACMAN];
    const sections = register.presentation.sections as any;

    expect(typeof sections.parser.readme).toBe('function');
    expect(typeof sections.parser.workflow).toBe('function');
    expect(sections.defaultConfig).toEqual(defaultPacmanSectionConfig);
  });

  it('onClick dispatches canvas.section.add with Sections.PACMAN', () => {
    const newSection = extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[
      Sections.PACMAN
    ] as any;

    newSection.onClick();

    expect(addHandler).toHaveBeenCalledWith(Sections.PACMAN);
  });
});
