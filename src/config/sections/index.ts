import { Sections } from 'types';

import { statsSectionConfig } from './stats';
import { techsSectionConfig } from './techs';
import { imageSectionConfig } from './image';
import { profileViewsSectionConfig } from './profile-views';

const defaultSectionProps = {
  [Sections.STATS]: statsSectionConfig,
  [Sections.TECHS]: techsSectionConfig,
  [Sections.IMAGE]: imageSectionConfig,
  [Sections.PROFILE_VIEWS]: profileViewsSectionConfig,
};

export { defaultSectionProps };
