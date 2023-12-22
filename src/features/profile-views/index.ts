import dynamic from 'next/dynamic';
import { Github } from '@styled-icons/feather';

import { profileViewsSectionParser } from './parser';
import { defaultProfileViewsSectionConfig } from './default-config';

import { events } from 'app';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.PROFILE_VIEWS,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: Github,
      onClick: () => events.canvas.add(Sections.PROFILE_VIEWS),
      name: 'Profile views',
    },

    sections: {
      component: dynamic(() =>
        import('./section').then(
          mod => mod.ProfileViewsSection,
          () => () => null
        )
      ),
      parser: {
        readme: profileViewsSectionParser,
      },
      defaultConfig: defaultProfileViewsSectionConfig,
    },

    panels: dynamic(() =>
      import('./panel').then(
        mod => mod.ProfileViewsPanel,
        () => () => null
      )
    ),
  },
};

events.extensions.register(feature);
