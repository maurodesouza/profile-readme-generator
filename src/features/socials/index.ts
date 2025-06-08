import dynamic from 'next/dynamic';

import { socialsSectionParser } from './parser';
import { defaultSocialsSectionConfig } from './default-config';

import { events } from '@events';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.SOCIALS,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'message-square',
      onClick: () => events.canvas.add(Sections.SOCIALS),
      name: 'Social Media',
    },

    sections: {
      component: dynamic(() =>
        import('./section').then(
          mod => mod.SocialsSection,
          () => () => null
        )
      ),
      parser: {
        readme: socialsSectionParser,
      },
      defaultConfig: defaultSocialsSectionConfig,
    },

    panels: dynamic(() =>
      import('./panel').then(
        mod => mod.SocialsEditPanel,
        () => () => null
      )
    ),
  },
};

events.extensions.register(feature);
