import { CanvasHandleEvents } from './canvas';
import { ContextMenuHanldeEvents } from './context-menu';
import { SettingsHandleEvents } from './settings';
import { EditPanelHandleEvents } from './edit-panel';
import { ResultHandleEvents } from './result';

class Handles {
  canvas = new CanvasHandleEvents();
  contextmenu = new ContextMenuHanldeEvents();
  settings = new SettingsHandleEvents();
  editpanel = new EditPanelHandleEvents();
  result = new ResultHandleEvents();
}

export { Handles };
