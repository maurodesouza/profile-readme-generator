import { DefaultEditPanel } from './default';

import { SnakePanel } from './snake';
import { TextEditPanel } from './text';
import { StatsEditPanel } from './stats';
import { TechsEditPanel } from './techs';
import { ImageEditPanel } from './image';
import { SocialsEditPanel } from './socials';
import { ProfileViewsPanel } from './profile-views';

import { Sections } from 'types';

const editingPanels = {
  default: DefaultEditPanel,
  [Sections.SNAKE]: SnakePanel,
  [Sections.STATS]: StatsEditPanel,
  [Sections.TEXT]: TextEditPanel,
  [Sections.TECHS]: TechsEditPanel,
  [Sections.IMAGE]: ImageEditPanel,
  [Sections.SOCIALS]: SocialsEditPanel,
  [Sections.PROFILE_VIEWS]: ProfileViewsPanel,
};

export { editingPanels };
