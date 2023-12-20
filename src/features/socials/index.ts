import dynamic from 'next/dynamic';
import { MessageSquare } from '@styled-icons/feather';

import { socialsSectionParser } from './parser';
import { defaultSocialsSectionConfig } from './default-config';

import { events } from 'app';
import { Sections } from 'types';

const feature = {
  id: Sections.SOCIALS,

  presentation: {
    'new-section': {
      icon: MessageSquare,
      onClick: () => events.canvas.add(Sections.SOCIALS),
      name: 'Social Media',
    },
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
};

events.extensions.register(feature);
