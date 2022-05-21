import { DefaultEditPanel } from './default';

import { SnakePanel } from './snake';
import { TextEditPanel } from './text';
import { MusicEditPanel } from './music';
import { ActivitiesEditPanel } from './activities';
import { StatsEditPanel } from './stats';
import { TechsEditPanel } from './techs';
import { ImageEditPanel } from './image';
import { SocialsEditPanel } from './socials';
import { ProfileViewsPanel } from './profile-views';

import { PanelsEnum } from 'types';

const editingPanels = {
  default: DefaultEditPanel,
  [PanelsEnum.MUSIC]: MusicEditPanel,
  [PanelsEnum.ACTIVITIES]: ActivitiesEditPanel,
  [PanelsEnum.SNAKE]: SnakePanel,
  [PanelsEnum.STATS]: StatsEditPanel,
  [PanelsEnum.TEXT]: TextEditPanel,
  [PanelsEnum.TECHS]: TechsEditPanel,
  [PanelsEnum.IMAGE]: ImageEditPanel,
  [PanelsEnum.SOCIALS]: SocialsEditPanel,
  [PanelsEnum.PROFILE_VIEWS]: ProfileViewsPanel,
};

export { editingPanels };
