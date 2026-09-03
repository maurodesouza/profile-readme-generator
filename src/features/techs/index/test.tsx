import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render } from '@testing-library/react';
import { runInAction } from 'mobx';

import { command } from '#/lib/command';
import { extensionsStore } from '#/stores/extensions-store';
import { PanelsEnum, Sections } from '#/types';

import { ExtensionsHandle } from '#/components/handles/extensions';

import { defaultTechsSectionConfig } from '../default-config';

function resetExtensionsStore() {
  runInAction(() => {
    extensionsStore.extensions = {};
    extensionsStore.registers = {};
  });
}

describe('FEATURE - techs index (registration)', () => {
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

  it('registers the techs feature with id Sections.TECHS', () => {
    expect(extensionsStore.registers[Sections.TECHS]).toBeDefined();
    expect(extensionsStore.registers[Sections.TECHS].id).toBe(Sections.TECHS);
  });

  it('registers the NEW_SECTION presentation with icon and name', () => {
    const newSection = extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[
      Sections.TECHS
    ] as any;

    expect(newSection).toBeDefined();
    expect(newSection.icon).toBe('cpu');
    expect(newSection.name).toBe('Techs');
  });

  it('registers the sections parser and defaultConfig', () => {
    const register = extensionsStore.registers[Sections.TECHS];
    const sections = register.presentation.sections as any;

    expect(typeof sections.parser.readme).toBe('function');
    expect(sections.defaultConfig).toEqual(defaultTechsSectionConfig);
  });

  it('onClick dispatches canvas.section.add with Sections.TECHS', () => {
    const newSection = extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[
      Sections.TECHS
    ] as any;

    newSection.onClick();

    expect(addHandler).toHaveBeenCalledWith(Sections.TECHS);
  });
});
