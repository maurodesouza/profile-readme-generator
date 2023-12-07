import { Github } from '@styled-icons/feather';

import { ProfileViewsPanel } from './panel';
import { ProfileViewsSection } from './section';
import { profileViewsSectionParser } from './parser';
import { defaultProfileViewsSectionConfig } from './default-config';

import { events } from 'app';
import { Sections } from 'types';

const feature = {
  id: Sections.PROFILE_VIEWS,

  presentation: {
    'new-section': {
      icon: Github,
      onClick: () => events.canvas.add(Sections.PROFILE_VIEWS),
      name: 'Profile views',
    },
  },

  sections: {
    component: ProfileViewsSection,
    parser: {
      readme: profileViewsSectionParser,
    },
    defaultConfig: defaultProfileViewsSectionConfig,
  },

  panels: ProfileViewsPanel,
};

export default feature;
