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

  clear = () => {
    this.emit(Events.CANVAS_CLEAR_SECTIONS);
  };

  edit = ({ path, ...rest }: HandleEditArgs) => {
    this.emit(Events.CANVAS_EDIT_SECTION, {
      ...rest,
      path: `props.${path}`,
    });
  };

  duplicate = (sectionId: string) => {
    this.emit(Events.CANVAS_DUPLICATE_SECTION, sectionId);
  };

  reorder = (order: string[]) => {
    this.emit(Events.CANVAS_REORDER_SECTIONS, order);
  };

  currentSection = (sectionId: string) => {
    this.emit(Events.CANVAS_SET_CURRENT_SECTION, sectionId);
  };

  up = (sectionId: string) => {
    this.emit(Events.CANVAS_MOVE_SECTION_UP, sectionId);
  };

  down = (sectionId: string) => {
    this.emit(Events.CANVAS_MOVE_SECTION_DOWN, sectionId);
  };
}

export { CanvasHandleEvents };
