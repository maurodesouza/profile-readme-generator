import { render } from '@testing-library/react';
import { runInAction } from 'mobx';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { actions, command } from '#/lib/command';
import { canvasStore } from '#/stores/canvas-store';
import { extensionsStore } from '#/stores/extensions-store';
import { CanvasSection, PanelsEnum, Sections } from '#/types';

import { CanvasHandle } from '.';

const musicSection = {
  id: 'music-section',
  type: Sections.MUSIC,
  props: { content: { type: 'recently' } },
} as unknown as CanvasSection;

function resetCanvasStore() {
  runInAction(() => {
    canvasStore.sections = [];
    canvasStore.activeSectionId = undefined;
    canvasStore.previewSections = [];
  });
}

function resetExtensionsStore() {
  runInAction(() => {
    extensionsStore.extensions = {};
    extensionsStore.registers = {};
  });
}

describe('CanvasHandle', () => {
  const showRightPanel = vi.fn();
  const applySettingsPreview = vi.fn();
  const resetSettingsPreview = vi.fn();
  let disposeRightPanel: () => void;
  let disposeApply: () => void;
  let disposeReset: () => void;
  let unmount: () => void;

  beforeEach(() => {
    window.localStorage.clear();
    resetCanvasStore();
    resetExtensionsStore();

    showRightPanel.mockClear();
    applySettingsPreview.mockClear();
    resetSettingsPreview.mockClear();

    disposeRightPanel = command.handle('panel.right.show', showRightPanel);
    disposeApply = command.handle(
      'settings.preview.apply',
      applySettingsPreview
    );
    disposeReset = command.handle(
      'settings.preview.reset',
      resetSettingsPreview
    );

    ({ unmount } = render(<CanvasHandle />));
  });

  afterEach(() => {
    unmount();
    disposeRightPanel();
    disposeApply();
    disposeReset();
  });

  it('resets the right panel when the active section is removed', async () => {
    runInAction(() => {
      canvasStore.sections = [musicSection];
      canvasStore.activeSectionId = musicSection.id;
    });

    await actions.canvas.section.remove(musicSection.id);

    expect(canvasStore.activeSectionId).toBeUndefined();
    expect(canvasStore.sections).toHaveLength(0);
    expect(showRightPanel).toHaveBeenCalledWith(
      PanelsEnum.RECOMMENDED_RESOURCES
    );
  });

  it('keeps the right panel when an inactive section is removed', async () => {
    runInAction(() => {
      canvasStore.sections = [
        musicSection,
        { ...musicSection, id: 'other-section' } as CanvasSection,
      ];
      canvasStore.activeSectionId = musicSection.id;
    });

    await actions.canvas.section.remove('other-section');

    expect(canvasStore.activeSectionId).toBe(musicSection.id);
    expect(canvasStore.sections).toHaveLength(1);
    expect(showRightPanel).not.toHaveBeenCalled();
  });

  it('resets the right panel when a readme is imported', async () => {
    const file = { text: async () => '' };

    await actions.canvas.import.apply({
      target: { files: [file] },
    } as unknown as React.ChangeEvent<HTMLInputElement>);

    expect(canvasStore.activeSectionId).toBeUndefined();
    expect(canvasStore.sections).toHaveLength(0);
    expect(showRightPanel).toHaveBeenCalledWith(
      PanelsEnum.RECOMMENDED_RESOURCES
    );
  });

  it('adds a section with default config from extensions', async () => {
    const defaultConfig = { props: { content: { text: 'Default' } } };

    runInAction(() => {
      extensionsStore.extensions = {
        sections: { text: { defaultConfig } },
      };
    });

    await actions.canvas.section.add(Sections.TEXT);

    expect(canvasStore.sections).toHaveLength(1);
    expect(canvasStore.sections[0].type).toBe(Sections.TEXT);
    expect(canvasStore.sections[0].props.content).toEqual({ text: 'Default' });
  });

  it('edits the active section props using a deep path', async () => {
    runInAction(() => {
      canvasStore.sections = [musicSection];
      canvasStore.activeSectionId = musicSection.id;
    });

    await actions.canvas.section.edit({ path: 'content.type', value: 'top' });

    expect(canvasStore.sections[0].props.content.type).toBe('top');
  });

  it('edits the active section props using props prefix', async () => {
    runInAction(() => {
      canvasStore.sections = [musicSection];
      canvasStore.activeSectionId = musicSection.id;
    });

    await actions.canvas.section.edit({
      path: 'props.content.type',
      value: 'top',
    });

    expect(canvasStore.sections[0].props.content.type).toBe('top');
  });

  it('activates a section and opens the right panel', async () => {
    runInAction(() => {
      canvasStore.sections = [musicSection];
    });

    await actions.canvas.section.activate(musicSection.id);

    expect(canvasStore.activeSectionId).toBe(musicSection.id);
    expect(showRightPanel).toHaveBeenCalledWith(musicSection.type);
  });

  it('duplicates a section next to the original', async () => {
    runInAction(() => {
      canvasStore.sections = [musicSection];
    });

    await actions.canvas.section.duplicate(musicSection.id);

    expect(canvasStore.sections).toHaveLength(2);
    expect(canvasStore.sections[0].id).toBe(musicSection.id);
    expect(canvasStore.sections[1].type).toBe(Sections.MUSIC);
    expect(canvasStore.sections[1].props.content.type).toBe('recently');
    expect(canvasStore.sections[1].id).not.toBe(musicSection.id);
  });

  it('moves a section up', async () => {
    const first = { ...musicSection, id: 'first', type: Sections.TEXT };
    const second = { ...musicSection, id: 'second' };

    runInAction(() => {
      canvasStore.sections = [first, second] as CanvasSection[];
    });

    await actions.canvas.section.moveUp('second');

    expect(canvasStore.sections[0].id).toBe('second');
    expect(canvasStore.sections[1].id).toBe('first');
  });

  it('moves a section down', async () => {
    const first = { ...musicSection, id: 'first', type: Sections.TEXT };
    const second = { ...musicSection, id: 'second' };

    runInAction(() => {
      canvasStore.sections = [first, second] as CanvasSection[];
    });

    await actions.canvas.section.moveDown('first');

    expect(canvasStore.sections[0].id).toBe('second');
    expect(canvasStore.sections[1].id).toBe('first');
  });

  it('reorders sections', async () => {
    const a = { ...musicSection, id: 'a' };
    const b = { ...musicSection, id: 'b' };
    const c = { ...musicSection, id: 'c' };

    runInAction(() => {
      canvasStore.sections = [a, b, c] as CanvasSection[];
    });

    await actions.canvas.sections.reorder(['c', 'a', 'b']);

    expect(canvasStore.sections[0].id).toBe('c');
    expect(canvasStore.sections[1].id).toBe('a');
    expect(canvasStore.sections[2].id).toBe('b');
  });

  it('clears all sections and resets the right panel', async () => {
    runInAction(() => {
      canvasStore.sections = [musicSection];
      canvasStore.activeSectionId = musicSection.id;
      canvasStore.previewSections = [
        { id: 'p1', type: Sections.BORDER, props: { content: {} } },
      ] as CanvasSection[];
    });

    await actions.canvas.sections.clear();

    expect(canvasStore.sections).toHaveLength(0);
    expect(canvasStore.previewSections).toHaveLength(0);
    expect(canvasStore.activeSectionId).toBeUndefined();
    expect(showRightPanel).toHaveBeenCalledWith(
      PanelsEnum.RECOMMENDED_RESOURCES
    );
    expect(resetSettingsPreview).toHaveBeenCalled();
  });

  it('previews a section template and enables settings preview', async () => {
    const template = [{ ...musicSection, id: 'template' }] as CanvasSection[];

    runInAction(() => {
      canvasStore.sections = [];
      canvasStore.activeSectionId = undefined;
    });

    await actions.canvas.preview.sections(template);

    expect(canvasStore.previewSections).toHaveLength(1);
    expect(canvasStore.$isInPreviewMode).toBe(true);
    expect(canvasStore.previewSections[0].type).toBe(Sections.MUSIC);
    expect(canvasStore.previewSections[0].id).not.toBe('template');
    expect(applySettingsPreview).toHaveBeenCalled();
  });

  it('applies preview sections and resets the preview state', async () => {
    const preview = [
      { id: 'p1', type: Sections.BORDER, props: { content: {} } },
    ];

    runInAction(() => {
      canvasStore.sections = [musicSection];
      canvasStore.activeSectionId = musicSection.id;
      canvasStore.previewSections = preview as CanvasSection[];
    });

    await actions.canvas.preview.apply();

    expect(canvasStore.sections).toHaveLength(1);
    expect(canvasStore.sections[0].type).toBe(Sections.BORDER);
    expect(canvasStore.previewSections).toHaveLength(0);
    expect(resetSettingsPreview).toHaveBeenCalled();
  });
});
