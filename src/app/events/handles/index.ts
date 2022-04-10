import { CanvasHandleEvents } from './canvas';
import { ContextMenuHanldeEvents } from './context-menu';
import { SettingsHandleEvents } from './settings';
import { EditPanelHandleEvents } from './edit-panel';

class Handles {
  canvas = new CanvasHandleEvents();
  contextmenu = new ContextMenuHanldeEvents();
  settings = new SettingsHandleEvents();
  editpanel = new EditPanelHandleEvents();
}

export { Handles };
