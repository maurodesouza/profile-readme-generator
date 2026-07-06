import dynamic from 'next/dynamic';

import { musicSectionParser } from './parser';
import { defaultMusicSectionConfig } from './default-config';

import { actions } from 'lib/command';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.MUSIC,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'music',
      onClick: () => actions.canvas.add(Sections.MUSIC),
      name: 'Music',
    },

    sections: {
      component: dynamic(() =>
        import('./section').then(
          mod => mod.MusicSection,
          () => () => null
        )
      ),
      parser: {
        readme: musicSectionParser,
      },
      defaultConfig: defaultMusicSectionConfig,
    },

    panels: dynamic(() =>
      import('./panel').then(
        mod => mod.MusicEditPanel,
        () => () => null
      )
    ),
  },
};

actions.extensions.register(feature);
