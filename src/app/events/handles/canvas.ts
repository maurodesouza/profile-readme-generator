import { Sections, Events } from 'types';

import { BaseEventHandle } from './base';

type HandleEditArgs = {
  id?: string;
  path: string;
  value: unknown;
};

class CanvasHandleEvents extends BaseEventHandle {
  constructor() {
    super();

    this.reorder = this.reorder.bind(this);
  }

  add = (sectionType: Sections) => {
    this.emit(Events.CANVAS_ADD_SECTION, sectionType);
  };

  remove = (sectionId: string) => {
    this.emit(Events.CANVAS_REMOVE_SECTION, sectionId);
  };

  edit = ({ path, ...rest }: HandleEditArgs) => {
    this.emit(Events.CANVAS_EDIT_SECTION, {
      ...rest,
      path: `props.${path}`,
    });
  };

  reorder = (order: string[]) => {
    this.emit(Events.CANVAS_REORDER_SECTIONS, order);
  };

  currentSection = (sectionId: string) => {
    this.emit(Events.CANVAS_SET_CURRENT_SECTION, sectionId);
  };
}

export { CanvasHandleEvents };
