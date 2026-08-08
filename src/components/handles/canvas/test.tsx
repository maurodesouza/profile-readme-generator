import { render } from '@testing-library/react';
import { runInAction } from 'mobx';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { actions, command } from '#/lib/command';
import { canvasStore } from '#/stores/canvas-store';
import { CanvasSection, PanelsEnum, Sections } from '#/types';

import { CanvasHandle } from '.';

const musicSection = {
  id: 'music-section',
  type: Sections.MUSIC,
  props: { content: { type: 'recently' } },
} as unknown as CanvasSection;

describe('CanvasHandle', () => {
  const showRightPanel = vi.fn();
  let disposeRightPanel: () => void;

  beforeEach(() => {
    showRightPanel.mockClear();
    disposeRightPanel = command.handle('panel.right.show', showRightPanel);

    render(<CanvasHandle />);

    runInAction(() => {
      canvasStore.sections = [musicSection];
      canvasStore.activeSectionId = musicSection.id;
      canvasStore.previewSections = [];
    });
  });

  afterEach(() => {
    disposeRightPanel();
  });

  it('resets the right panel when the active section is removed', async () => {
    await actions.canvas.section.remove(musicSection.id);

    expect(canvasStore.activeSectionId).toBeUndefined();
    expect(showRightPanel).toHaveBeenCalledWith(
      PanelsEnum.RECOMMENDED_RESOURCES
    );
  });

  it('keeps the right panel when an inactive section is removed', async () => {
    runInAction(() => {
      canvasStore.sections.push({
        ...musicSection,
        id: 'other-section',
      } as CanvasSection);
    });

    await actions.canvas.section.remove('other-section');

    expect(canvasStore.activeSectionId).toBe(musicSection.id);
    expect(showRightPanel).not.toHaveBeenCalled();
  });

  it('resets the right panel when a readme is imported', async () => {
    const file = { text: async () => '' };

    await actions.canvas.import.apply({
      target: { files: [file] },
    } as unknown as React.ChangeEvent<HTMLInputElement>);

    expect(canvasStore.activeSectionId).toBeUndefined();
    expect(showRightPanel).toHaveBeenCalledWith(
      PanelsEnum.RECOMMENDED_RESOURCES
    );
  });
});
