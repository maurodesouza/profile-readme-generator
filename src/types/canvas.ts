import { Sections } from '.';

export type CanvasSection = {
  id: string;
  type: Sections;
  props: any;
};

export enum CanvasStatesEnum {
  DEFAULT = 'default',
  PREVIEW = 'preview',
  ALERT = 'alert',
  SELECTED = 'selected',
}
