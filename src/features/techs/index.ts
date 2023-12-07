import { Share2 } from '@styled-icons/feather';

import { TechsEditPanel } from './panel';
import { TechsSection } from './section';
import { techsSectionParser } from './parser';
import { defaultTechsSectionConfig } from './default-config';

import { events } from 'app';
import { Sections } from 'types';

const feature = {
  id: Sections.TECHS,

  presentation: {
    'new-section': {
      icon: Share2,
      onClick: () => events.canvas.add(Sections.TECHS),
      name: 'Techs',
    },
  },

  sections: {
    component: TechsSection,
    parser: {
      readme: techsSectionParser,
    },
    defaultConfig: defaultTechsSectionConfig,
  },

  panels: TechsEditPanel,
};

export default feature;
