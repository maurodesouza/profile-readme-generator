import { CanvasHandleEvents } from './canvas';
import { SettingsHandleEvents } from './settings';
import { PanelHandleEvents } from './panel';
import { ResultHandleEvents } from './result';
import { ModalHandleEvents } from './modal';
import { TemplateHandleEvents } from './template';
import { ExtensionsHandleEvents } from './extensions';
import { ThemeHandleEvents } from './theme';

class Handles {
  canvas = new CanvasHandleEvents();
  settings = new SettingsHandleEvents();
  panel = new PanelHandleEvents();
  result = new ResultHandleEvents();
  modal = new ModalHandleEvents();
  template = new TemplateHandleEvents();
  extensions = new ExtensionsHandleEvents();
  theme = new ThemeHandleEvents();
}

export { Handles };
