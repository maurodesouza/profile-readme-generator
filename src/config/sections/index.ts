import { Sections } from 'types';

import { statsSectionConfig } from './stats';
import { techsSectionConfig } from './techs';
import { musicSectionConfig } from './music';
import { textSectionConfig } from './text';
import { activitiesSectionConfig } from './activities';
import { snakeSectionConfig } from './snake';
import { pacmanSectionConfig } from './pacman';
import { imageSectionConfig } from './image';
import { socialsSectionConfig } from './social';
import { profileViewsSectionConfig } from './profile-views';

const sections = {
  default: {
    [Sections.MUSIC]: musicSectionConfig,
    [Sections.ACTIVITIES]: activitiesSectionConfig,
    [Sections.SNAKE]: snakeSectionConfig,
    [Sections.PACMAN]: pacmanSectionConfig,
    [Sections.STATS]: statsSectionConfig,
    [Sections.TECHS]: techsSectionConfig,
    [Sections.IMAGE]: imageSectionConfig,
    [Sections.TEXT]: textSectionConfig,
    [Sections.SOCIALS]: socialsSectionConfig,
    [Sections.PROFILE_VIEWS]: profileViewsSectionConfig,
  },
};

export { sections };
