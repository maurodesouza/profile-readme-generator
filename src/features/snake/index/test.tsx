import { describe, it, expect, vi, beforeAll, afterAll } from 'vitest';
import { render } from '@testing-library/react';
import { runInAction } from 'mobx';

import { command } from '#/lib/command';
import { extensionsStore } from '#/stores/extensions-store';
import { PanelsEnum, Sections } from '#/types';

import { ExtensionsHandle } from '#/components/handles/extensions';

import { defaultSnakeSectionConfig } from '../default-config';

function resetExtensionsStore() {
  runInAction(() => {
    extensionsStore.extensions = {};
    extensionsStore.registers = {};
  });
}

describe('FEATURE - snake index (registration)', () => {
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

  it('registers the snake feature with id Sections.SNAKE', () => {
    expect(extensionsStore.registers[Sections.SNAKE]).toBeDefined();
    expect(extensionsStore.registers[Sections.SNAKE].id).toBe(Sections.SNAKE);
  });

  it('registers the NEW_SECTION presentation with icon and name', () => {
    const newSection = extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[
      Sections.SNAKE
    ] as any;

    expect(newSection).toBeDefined();
    expect(newSection.icon).toBe('worm');
    expect(newSection.name).toBe('Snake');
  });

  it('registers the sections readme and workflow parsers and defaultConfig', () => {
    const register = extensionsStore.registers[Sections.SNAKE];
    const sections = register.presentation.sections as any;

    expect(typeof sections.parser.readme).toBe('function');
    expect(typeof sections.parser.workflow).toBe('function');
    expect(sections.defaultConfig).toEqual(defaultSnakeSectionConfig);
  });

  it('onClick dispatches canvas.section.add with Sections.SNAKE', () => {
    const newSection = extensionsStore.extensions[PanelsEnum.NEW_SECTION]?.[
      Sections.SNAKE
    ] as any;

    newSection.onClick();

    expect(addHandler).toHaveBeenCalledWith(Sections.SNAKE);
  });
});
