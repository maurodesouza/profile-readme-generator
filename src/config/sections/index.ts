import { Sections } from 'types';

import { statsSectionConfig } from './stats';
import { techsSectionConfig } from './techs';

const defaultSectionProps = {
  [Sections.STATS]: statsSectionConfig,
  [Sections.TECHS]: techsSectionConfig,
};

export { defaultSectionProps };
