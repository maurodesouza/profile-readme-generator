import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render } from '@testing-library/react';
import { runInAction } from 'mobx';

import { command } from '#/lib/command';
import { extensionsStore } from '#/stores/extensions-store';
import { PanelsEnum, Sections } from '#/types';

import { ExtensionsHandle } from '#/components/handles/extensions';

import { defaultActivitiesSectionConfig } from '../default-config';

function resetExtensionsStore() {
  runInAction(() => {
    extensionsStore.extensions = {};
    extensionsStore.registers = {};
  });
}

describe('FEATURE - activities index (registration)', () => {
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

  it('registers the activities feature with id Sections.ACTIVITIES', () => {
    expect(extensionsStore.registers[Sections.ACTIVITIES]).toBeDefined();
    expect(extensionsStore.registers[Sections.ACTIVITIES].id).toBe(
      Sections.ACTIVITIES
    );
  });

  it('registers the NEW_SECTION presentation with icon and name', () => {
    const newSection = extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[
      Sections.ACTIVITIES
    ] as any;

    expect(newSection).toBeDefined();
    expect(newSection.icon).toBe('activity');
    expect(newSection.name).toBe('My activities');
  });

  it('registers the sections parser and defaultConfig', () => {
    const register = extensionsStore.registers[Sections.ACTIVITIES];
    const sections = register.presentation.sections as any;

    expect(typeof sections.parser.readme).toBe('function');
    expect(sections.defaultConfig).toEqual(defaultActivitiesSectionConfig);
  });

  it('onClick dispatches canvas.section.add with Sections.ACTIVITIES', () => {
    const newSection = extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[
      Sections.ACTIVITIES
    ] as any;

    newSection.onClick();

    expect(addHandler).toHaveBeenCalledWith(Sections.ACTIVITIES);
  });
});
