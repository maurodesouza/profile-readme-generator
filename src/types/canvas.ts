import { Sections } from '.';

import { Icon } from './icon';

export type CanvasContent = {
  icons?: Record<string, Icon>;
  [key: string]: any;
};

export type CanvasSection = {
  id: string;
  type: Sections;
  props: {
    content: CanvasContent;
    state?: CanvasStatesEnum;
    styles?: Record<string, any>;
    [key: string]: any;
  };
};

export enum CanvasStatesEnum {
  DEFAULT = 'default',
  PREVIEW = 'preview',
  ALERT = 'alert',
  SELECTED = 'selected',
}
