import { Sections, Events } from 'types';

import { BaseEventHandle } from './base';

class EditPanelHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  open(type: Sections) {
    this.emit(Events.EDIT_PANEL_OPEN, type);
  }
}

export { EditPanelHandleEvents };
