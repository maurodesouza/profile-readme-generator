import { Events } from '../types';

import { CanvasHandleEvents } from './canvas';
import { EditPanelHandleEvents } from './edit-panel';
import { ContextMenuHanldeEvents } from './context-menu';
import { SettingsHandleEvents } from './settings';

type Callback = (args: any) => void;
type Event = Events | keyof DocumentEventMap;

export class EventHandle {
  canvas = new CanvasHandleEvents(this);
  editpanel = new EditPanelHandleEvents(this);
  contextmenu = new ContextMenuHanldeEvents(this);
  settings = new SettingsHandleEvents(this);

  on(event: Event, callback: Callback) {
    document.addEventListener(event, callback);
  }

  off(event: Event, callback: Callback) {
    document.removeEventListener(event, callback);
  }

  emit(event: Events, payload?: unknown) {
    console.info(`events[emit]: ${event}`, payload);

    const customEvent = new CustomEvent(event, { detail: payload });
    document.dispatchEvent(customEvent);
  }
}

const events = new EventHandle();

export { events };
