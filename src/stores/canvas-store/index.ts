import { makeAutoObservable } from 'mobx';

import { CanvasSection } from 'types';

class CanvasStore {
  sections: CanvasSection[] = [];
  activeSectionId: string | undefined = undefined;
  previewSections: CanvasSection[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get $isInPreviewMode() {
    return this.previewSections.length > 0;
  }

  get $canvas() {
    return this.$isInPreviewMode ? this.previewSections : this.sections;
  }

  get $sectionsMap() {
    return this.sections.reduce(
      (acc, section, index) => {
        acc.byId[section.id] = section;
        acc.indexById[section.id] = index;
        return acc;
      },
      {
        byId: {} as Record<string, CanvasSection>,
        indexById: {} as Record<string, number>,
      }
    );
  }
}

const canvasStore = new CanvasStore();

export { canvasStore };
