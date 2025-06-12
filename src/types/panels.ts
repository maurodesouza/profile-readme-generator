import { Sections as EditPanels } from '.';
import { ValueOf } from './helpers';

enum OtherPanels {
  NEW_SECTION = 'new-section',
  GENERATED_FILES = 'generated-files',
  TEMPLATES = 'templates',
  RECOMMENDED_RESOURCES = 'recommended-resources',
  USER_SETTINGS = 'user-settings',
  REORDER_SECTIONS = 'reorder-sections',
}

export type PanelSide = 'right' | 'left';

export const PanelsEnum = { ...EditPanels, ...OtherPanels } as const;
export type PanelsEnumType = ValueOf<typeof PanelsEnum>;
