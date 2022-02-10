import { Sections, Events } from 'types';

import { EventHandle } from './base';

class EditPanelHandleEvents {
  constructor(private readonly handle: EventHandle) {}

  open(type: Sections) {
    this.handle.emit(Events.EDIT_PANEL_OPEN, type);
  }
}

export { EditPanelHandleEvents };
