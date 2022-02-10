import { Blocks, Events } from 'types';

import { EventHandle } from './base';

type HandleEditArgs = {
  id: string;
  path: string;
  value: unknown;
};

class CanvasHandleEvents {
  constructor(private readonly handle: EventHandle) {}

  add(contentType: Blocks) {
    this.handle.emit(Events.CANVAS_ADD_CONTENT, contentType);
  }

  remove(contentId: string) {
    this.handle.emit(Events.CANVAS_REMOVE_CONTENT, contentId);
  }

  edit({ path, ...rest }: HandleEditArgs) {
    this.handle.emit(Events.CANVAS_EDIT_CONTENT, {
      ...rest,
      path: `props.${path}`,
    });
  }

  currentContent(contentId: string) {
    this.handle.emit(Events.CANVAS_SET_CURRENT_CONTENT, contentId);
  }
}

export { CanvasHandleEvents };
