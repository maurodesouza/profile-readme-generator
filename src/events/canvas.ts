import { Sections, Events } from 'types';

import { EventHandle } from './base';

type HandleEditArgs = {
  id?: string;
  path: string;
  value: unknown;
};

class CanvasHandleEvents {
  constructor(private readonly handle: EventHandle) {
    this.reorder = this.reorder.bind(this);
  }

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

  reorder(order: string[]) {
    this.handle.emit(Events.CANVAS_REORDER_SECTIONS, order);
  }

  currentSection(sectionId: string) {
    this.handle.emit(Events.CANVAS_SET_CURRENT_SECTION, sectionId);
  }
}

export { CanvasHandleEvents };
