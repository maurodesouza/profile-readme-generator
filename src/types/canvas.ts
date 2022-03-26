import { Sections } from '.';

export type CanvasSection = {
  id: string;
  type: Sections;
  props: any;
};

export enum CanvasStatesEnum {
  DEFAULT = 'default',
  ALERT = 'alert',
  SELECTED = 'selected',
}
