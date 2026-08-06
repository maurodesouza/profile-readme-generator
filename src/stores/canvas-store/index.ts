import { fn } from '#/utils/fn';
import { makeAutoObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

import { CanvasSection } from '#/types';

class CanvasStore {
  sections: CanvasSection[] = [];
  activeSectionId: string | undefined = undefined;
  previewSections: CanvasSection[] = [];

  constructor() {
    makeAutoObservable(this);

    makePersistable(this, {
      name: 'canvas store',
      properties: ['sections'],
      storage: fn.storage,
    });
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

  get $currentSection() {
    return this.activeSectionId
      ? this.$sectionsMap.byId[this.activeSectionId]
      : undefined;
  }
}

const canvasStore = new CanvasStore();

export { canvasStore };
