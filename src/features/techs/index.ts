import dynamic from 'next/dynamic';
import { Share2 } from '@styled-icons/feather';

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
    component: dynamic(() =>
      import('./section').then(
        mod => mod.TechsSection,
        () => () => null
      )
    ),
    parser: {
      readme: techsSectionParser,
    },
    defaultConfig: defaultTechsSectionConfig,
  },

  panels: dynamic(() =>
    import('./panel').then(
      mod => mod.TechsEditPanel,
      () => () => null
    )
  ),
};

events.extensions.register(feature);
