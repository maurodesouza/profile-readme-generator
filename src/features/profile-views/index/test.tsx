import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render } from '@testing-library/react';
import { runInAction } from 'mobx';

import { command } from '#/lib/command';
import { extensionsStore } from '#/stores/extensions-store';
import { PanelsEnum, Sections } from '#/types';

import { ExtensionsHandle } from '#/components/handles/extensions';

import { defaultProfileViewsSectionConfig } from '../default-config';

function resetExtensionsStore() {
  runInAction(() => {
    extensionsStore.extensions = {};
    extensionsStore.registers = {};
  });
}

describe('FEATURE - profile-views index (registration)', () => {
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

  it('registers the profile-views feature with id Sections.PROFILE_VIEWS', () => {
    expect(extensionsStore.registers[Sections.PROFILE_VIEWS]).toBeDefined();
    expect(extensionsStore.registers[Sections.PROFILE_VIEWS].id).toBe(
      Sections.PROFILE_VIEWS
    );
  });

  it('registers the NEW_SECTION presentation with icon and name', () => {
    const newSection =
      extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[
        Sections.PROFILE_VIEWS
      ];

    expect(newSection).toBeDefined();
    expect(newSection.icon).toBe('telescope');
    expect(newSection.name).toBe('Profile views');
  });

  it('registers the sections parser and defaultConfig', () => {
    const register = extensionsStore.registers[Sections.PROFILE_VIEWS];
    const sections = register.presentation.sections as any;

    expect(typeof sections.parser.readme).toBe('function');
    expect(sections.defaultConfig).toEqual(defaultProfileViewsSectionConfig);
  });

  it('onClick dispatches canvas.section.add with Sections.PROFILE_VIEWS', () => {
    const newSection =
      extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[
        Sections.PROFILE_VIEWS
      ];

    newSection.onClick();

    expect(addHandler).toHaveBeenCalledWith(Sections.PROFILE_VIEWS);
  });
});
