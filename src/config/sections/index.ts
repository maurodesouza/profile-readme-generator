import { Sections } from 'types';

import { statsSectionConfig } from './stats';
import { techsSectionConfig } from './techs';
import { imageSectionConfig } from './image';
import { socialsSectionConfig } from './social';
import { profileViewsSectionConfig } from './profile-views';

const defaultSectionProps = {
  [Sections.STATS]: statsSectionConfig,
  [Sections.TECHS]: techsSectionConfig,
  [Sections.IMAGE]: imageSectionConfig,
  [Sections.SOCIALS]: socialsSectionConfig,
  [Sections.PROFILE_VIEWS]: profileViewsSectionConfig,
};

export { defaultSectionProps };
