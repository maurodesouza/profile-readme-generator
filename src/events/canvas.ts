import { Blocks, Events } from 'types';

import { EventHandle } from './base';

class CanvasHandleEvents {
  constructor(private readonly handle: EventHandle) {}

  add(contentType: Blocks) {
    this.handle.emit(Events.CANVAS_ADD_CONTENT, contentType);
  }

  remove(contentId: string) {
    this.handle.emit(Events.CANVAS_REMOVE_CONTENT, contentId);
  }
}

export { CanvasHandleEvents };
