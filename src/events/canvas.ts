import { Sections, Events } from 'types';

import { EventHandle } from './base';

type HandleEditArgs = {
  id: string;
  path: string;
  value: unknown;
};

class CanvasHandleEvents {
  constructor(private readonly handle: EventHandle) {}

  add(sectionType: Sections) {
    this.handle.emit(Events.CANVAS_ADD_SECTION, sectionType);
  }

  remove(sectionId: string) {
    this.handle.emit(Events.CANVAS_REMOVE_SECTION, sectionId);
  }

  edit({ path, ...rest }: HandleEditArgs) {
    this.handle.emit(Events.CANVAS_EDIT_SECTION, {
      ...rest,
      path: `props.${path}`,
    });
  }

  currentSection(sectionId: string) {
    this.handle.emit(Events.CANVAS_SET_CURRENT_SECTION, sectionId);
  }
}

export { CanvasHandleEvents };
