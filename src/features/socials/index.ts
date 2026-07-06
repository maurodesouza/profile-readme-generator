import dynamic from 'next/dynamic';

import { socialsSectionParser } from './parser';
import { defaultSocialsSectionConfig } from './default-config';

import { actions } from 'lib/command';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.SOCIALS,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'message-square',
      onClick: () => actions.canvas.add(Sections.SOCIALS),
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

actions.extensions.register(feature);
