import dynamic from 'next/dynamic';

import { profileViewsSectionParser } from './parser';
import { defaultProfileViewsSectionConfig } from './default-config';

import { actions } from 'lib/command';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.PROFILE_VIEWS,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'telescope',
      onClick: () => actions.canvas.add(Sections.PROFILE_VIEWS),
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

actions.extensions.register(feature);
