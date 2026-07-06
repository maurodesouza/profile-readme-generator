import type {
  CanvasSection,
  Extension,
  PanelsEnumType,
  PanelSide,
  Renderable,
  Sections,
} from 'types';
import type { Action } from './types';

type PanelActions = {
  show: Action<PanelsEnumType>;
  clear: Action;
  open: Action;
  close: Action;
};

export interface Actions {
  canvas: {
    add: Action<Sections>;
    remove: Action<string>;
    edit: Action<{ id?: string; path: string; value: unknown }>;
    setCurrentSection: Action<string>;
    reorder: Action<string[]>;
    duplicate: Action<string>;
    moveUp: Action<string>;
    moveDown: Action<string>;
    clear: Action;
    loadImportFile: Action;
    import: Action<React.ChangeEvent<HTMLInputElement>>;
  };

  settings: {
    edit: Action<{ path: string; value: unknown }>;
  };

  panel: {
    right: PanelActions;
    left: PanelActions;
  };

  modal: {
    open: Action<Renderable>;
    close: Action;
  };

  result: {
    show: Action<string>;
  };

  template: {
    use: Action;
    preview: Action<CanvasSection[] | undefined>;
  };

  extensions: {
    register: Action<Extension | Extension[]>;
  };

  theme: {
    use: Action<string>;
    toggle: Action;
  };
}
