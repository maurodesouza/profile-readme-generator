import { MessageSquare } from '@styled-icons/feather';

import { SocialsEditPanel } from './panel';
import { SocialsSection } from './section';
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
    component: SocialsSection,
    parser: {
      readme: socialsSectionParser,
    },
    defaultConfig: defaultSocialsSectionConfig,
  },

  panels: SocialsEditPanel,
};

events.extensions.register(feature);
