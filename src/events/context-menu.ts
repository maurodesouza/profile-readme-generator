import { MouseEvent } from 'react';
import { ContextMenus, Events } from 'types';

import { EventHandle } from './base';

class ContextMenuHanldeEvents {
  constructor(private readonly handle: EventHandle) {}

  open(context: ContextMenus, event: MouseEvent) {
    this.handle.emit(Events.CONTEXT_MENU_OPEN, { context, event });
  }

  close() {
    this.handle.emit(Events.CONTEXT_MENU_CLOSE);
  }
}

export { ContextMenuHanldeEvents };
