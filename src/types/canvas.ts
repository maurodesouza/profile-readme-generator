import { Sections } from '.';

import { Icon } from './icon';

export type CanvasContent = {
  icons?: Record<string, Icon>;
};

export type CanvasSection = {
  id: string;
  type: Sections;
  props: {
    content: CanvasContent;
  };
};

export enum CanvasStatesEnum {
  DEFAULT = 'default',
  PREVIEW = 'preview',
  ALERT = 'alert',
  SELECTED = 'selected',
}
