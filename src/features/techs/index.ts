import dynamic from 'next/dynamic';

import { Icon } from 'components/ui/primitives/atoms/icon';

import { techsSectionParser } from './parser';
import { defaultTechsSectionConfig } from './default-config';

import { events } from 'app';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.TECHS,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'cpu',
      onClick: () => events.canvas.add(Sections.TECHS),
      name: 'Techs',
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
  },
};

events.extensions.register(feature);
