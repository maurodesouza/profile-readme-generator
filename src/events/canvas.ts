import { CanvasContent, Events } from 'types';

import { EventHandle } from './base';

class CanvasHandleEvents {
  constructor(private readonly handle: EventHandle) {}

  add(content: CanvasContent) {
    this.handle.emit(Events.CANVAS_ADD_CONTENT, content);
  }

  remove(contentId: string) {
    this.handle.emit(Events.CANVAS_REMOVE_CONTENT, contentId);
  }
}

export { CanvasHandleEvents };
