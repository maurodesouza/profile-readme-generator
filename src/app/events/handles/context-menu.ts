import { MouseEvent } from 'react';
import { ContextMenus, Events } from 'types';

import { BaseEventHandle } from './base';

class ContextMenuHanldeEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  open(context: ContextMenus, event: MouseEvent) {
    this.emit(Events.CONTEXT_MENU_OPEN, { context, event });
  }

  close() {
    this.emit(Events.CONTEXT_MENU_CLOSE);
  }
}

export { ContextMenuHanldeEvents };
