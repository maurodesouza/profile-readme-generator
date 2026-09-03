import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render } from '@testing-library/react';
import { runInAction } from 'mobx';

import { command } from '#/lib/command';
import { extensionsStore } from '#/stores/extensions-store';
import { PanelsEnum, Sections } from '#/types';

import { ExtensionsHandle } from '#/components/handles/extensions';

import { defaultSocialsSectionConfig } from '../default-config';

function resetExtensionsStore() {
  runInAction(() => {
    extensionsStore.extensions = {};
    extensionsStore.registers = {};
  });
}

describe('FEATURE - socials index (registration)', () => {
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

  it('registers the socials feature with id Sections.SOCIALS', () => {
    expect(extensionsStore.registers[Sections.SOCIALS]).toBeDefined();
    expect(extensionsStore.registers[Sections.SOCIALS].id).toBe(
      Sections.SOCIALS
    );
  });

  it('registers the NEW_SECTION presentation with icon and name', () => {
    const newSection =
      extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[Sections.SOCIALS];

    expect(newSection).toBeDefined();
    expect(newSection.icon).toBe('message-square');
    expect(newSection.name).toBe('Social Media');
  });

  it('registers the sections parser and defaultConfig', () => {
    const register = extensionsStore.registers[Sections.SOCIALS];
    const sections = register.presentation.sections as any;

    expect(typeof sections.parser.readme).toBe('function');
    expect(sections.defaultConfig).toEqual(defaultSocialsSectionConfig);
  });

  it('onClick dispatches canvas.section.add with Sections.SOCIALS', () => {
    const newSection =
      extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[Sections.SOCIALS];

    newSection.onClick();

    expect(addHandler).toHaveBeenCalledWith(Sections.SOCIALS);
  });
});
