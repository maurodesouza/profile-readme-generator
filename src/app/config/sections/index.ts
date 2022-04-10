import { Sections } from 'types';

import { statsSectionConfig } from './stats';
import { techsSectionConfig } from './techs';
import { textSectionConfig } from './text';
import { imageSectionConfig } from './image';
import { socialsSectionConfig } from './social';
import { profileViewsSectionConfig } from './profile-views';

const sections = {
  default: {
    [Sections.STATS]: statsSectionConfig,
    [Sections.TECHS]: techsSectionConfig,
    [Sections.IMAGE]: imageSectionConfig,
    [Sections.TEXT]: textSectionConfig,
    [Sections.SOCIALS]: socialsSectionConfig,
    [Sections.PROFILE_VIEWS]: profileViewsSectionConfig,
  },
};

export { sections };
