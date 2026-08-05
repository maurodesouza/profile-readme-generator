import type {
  CanvasSection,
  Extension,
  PanelsEnumType,
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
    section: {
      add: Action<Sections>;
      remove: Action<string>;
      edit: Action<{ id?: string; path: string; value: unknown }>;
      activate: Action<string>;
      duplicate: Action<string>;
      moveUp: Action<string>;
      moveDown: Action<string>;
    };
    sections: {
      clear: Action;
      reorder: Action<string[]>;
    };
    import: {
      loadFile: Action;
      apply: Action<React.ChangeEvent<HTMLInputElement>>;
    };
    preview: {
      sections: Action<CanvasSection[] | undefined>;
      apply: Action;
    };
  };

  settings: {
    edit: Action<{ path: string; value: unknown }>;
    preview: {
      apply: Action;
      reset: Action;
    };
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

  generated: {
    workflows: {
      highlight: Action;
      unhighlight: Action;
    };
  };

  extensions: {
    register: Action<Extension | Extension[]>;
  };

  theme: {
    use: Action<string>;
    toggle: Action;
  };
}
