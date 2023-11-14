import { CanvasHandleEvents } from './canvas';
import { ContextMenuHandleEvents } from './context-menu';
import { SettingsHandleEvents } from './settings';
import { PanelHandleEvents } from './panel';
import { ResultHandleEvents } from './result';
import { ModalHandleEvents } from './modal';
import { TemplateHandleEvents } from './template';

class Handles {
  canvas = new CanvasHandleEvents();
  contextmenu = new ContextMenuHandleEvents();
  settings = new SettingsHandleEvents();
  panel = new PanelHandleEvents();
  result = new ResultHandleEvents();
  modal = new ModalHandleEvents();
  template = new TemplateHandleEvents();
}

export { Handles };
