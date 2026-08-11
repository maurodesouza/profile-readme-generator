import { runInAction } from 'mobx';
import { beforeEach, describe, expect, it } from 'vitest';

import { canvasStore } from '.';
import { Sections } from '#/types';

const sampleSections = [
  { id: 's1', type: Sections.TEXT, props: { content: {} } },
  { id: 's2', type: Sections.MUSIC, props: { content: {} } },
];

function resetCanvasStore() {
  runInAction(() => {
    canvasStore.sections = [];
    canvasStore.activeSectionId = undefined;
    canvasStore.previewSections = [];
  });
}

describe('CanvasStore', () => {
  beforeEach(() => {
    window.localStorage.clear();
    resetCanvasStore();
  });

  it('$isInPreviewMode is false when previewSections is empty', () => {
    runInAction(() => {
      canvasStore.previewSections = [];
    });

    expect(canvasStore.$isInPreviewMode).toBe(false);
  });

  it('$isInPreviewMode is true when previewSections has items', () => {
    runInAction(() => {
      canvasStore.previewSections = sampleSections;
    });

    expect(canvasStore.$isInPreviewMode).toBe(true);
  });

  it('$canvas returns sections when not in preview', () => {
    runInAction(() => {
      canvasStore.sections = sampleSections;
      canvasStore.previewSections = [];
    });

    expect(canvasStore.$canvas).toEqual(sampleSections);
  });

  it('$canvas returns previewSections when in preview', () => {
    const preview = [
      { id: 'p1', type: Sections.BORDER, props: { content: {} } },
    ];

    runInAction(() => {
      canvasStore.sections = sampleSections;
      canvasStore.previewSections = preview;
    });

    expect(canvasStore.$canvas).toEqual(preview);
  });

  it('$sectionsMap builds byId and indexById', () => {
    runInAction(() => {
      canvasStore.sections = sampleSections;
    });

    const map = canvasStore.$sectionsMap;

    expect(map.byId.s1).toEqual(sampleSections[0]);
    expect(map.byId.s2).toEqual(sampleSections[1]);
    expect(map.indexById.s1).toBe(0);
    expect(map.indexById.s2).toBe(1);
  });

  it('$currentSection returns the active section', () => {
    runInAction(() => {
      canvasStore.sections = sampleSections;
      canvasStore.activeSectionId = 's1';
    });

    expect(canvasStore.$currentSection).toEqual(sampleSections[0]);
  });

  it('$currentSection returns undefined when no active section', () => {
    runInAction(() => {
      canvasStore.sections = sampleSections;
      canvasStore.activeSectionId = undefined;
    });

    expect(canvasStore.$currentSection).toBeUndefined();
  });
});
