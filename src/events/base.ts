import { Events } from '../types';

import { CanvasHandleEvents } from './canvas';
import { EditPanelHandleEvents } from './edit-panel';

type Callback = (args: CustomEvent) => void;

export class EventHandle {
  canvas = new CanvasHandleEvents(this);
  editpanel = new EditPanelHandleEvents(this);

  on(event: Events, callback: Callback) {
    document.addEventListener(event, callback as EventListener);
  }

  off(event: Events, callback: Callback) {
    document.removeEventListener(event, callback as EventListener);
  }

  emit(event: Events, payload?: unknown) {
    console.info(`events[emit]: ${event}`, payload);

    const customEvent = new CustomEvent(event, { detail: payload });
    document.dispatchEvent(customEvent);
  }
}

const events = new EventHandle();

export { events };
