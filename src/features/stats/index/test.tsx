import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render } from '@testing-library/react';
import { runInAction } from 'mobx';

import { command } from '#/lib/command';
import { extensionsStore } from '#/stores/extensions-store';
import { PanelsEnum, Sections } from '#/types';

import { ExtensionsHandle } from '#/components/handles/extensions';

import { defaultStatsSectionConfig } from '../default-config';

function resetExtensionsStore() {
  runInAction(() => {
    extensionsStore.extensions = {};
    extensionsStore.registers = {};
  });
}

describe('FEATURE - stats index (registration)', () => {
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

  it('registers the stats feature with id Sections.STATS', () => {
    expect(extensionsStore.registers[Sections.STATS]).toBeDefined();
    expect(extensionsStore.registers[Sections.STATS].id).toBe(Sections.STATS);
  });

  it('registers the NEW_SECTION presentation with icon and name', () => {
    const newSection =
      extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[Sections.STATS];

    expect(newSection).toBeDefined();
    expect(newSection.icon).toBe('pie-chart');
    expect(newSection.name).toBe('Stats');
  });

  it('registers the sections readme and workflow parsers and defaultConfig', () => {
    const register = extensionsStore.registers[Sections.STATS];
    const sections = register.presentation.sections as any;

    expect(typeof sections.parser.readme).toBe('function');
    expect(typeof sections.parser.workflow).toBe('function');
    expect(sections.defaultConfig).toEqual(defaultStatsSectionConfig);
  });

  it('onClick dispatches canvas.section.add with Sections.STATS', () => {
    const newSection =
      extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[Sections.STATS];

    newSection.onClick();

    expect(addHandler).toHaveBeenCalledWith(Sections.STATS);
  });
});
