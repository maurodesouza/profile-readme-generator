import { CanvasHandleEvents } from './canvas';
import { ContextMenuHanldeEvents } from './context-menu';
import { SettingsHandleEvents } from './settings';
import { PanelHandleEvents } from './panel';
import { ResultHandleEvents } from './result';

class Handles {
  canvas = new CanvasHandleEvents();
  contextmenu = new ContextMenuHanldeEvents();
  settings = new SettingsHandleEvents();
  panel = new PanelHandleEvents();
  result = new ResultHandleEvents();
}

export { Handles };
