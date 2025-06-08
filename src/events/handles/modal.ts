import { Events, Renderable } from 'types';

import { BaseEventHandle } from './base';

class ModalHandleEvents extends BaseEventHandle {
  constructor() {
    super();

    this.close = this.close.bind(this);
  }

  open(modal: Renderable) {
    this.emit(Events.MODAL_OPEN, modal);
  }

  close() {
    this.emit(Events.MODAL_CLOSE);
  }
}

export { ModalHandleEvents };
