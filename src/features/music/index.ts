import dynamic from 'next/dynamic';

import { musicSectionParser } from './parser';
import { defaultMusicSectionConfig } from './default-config';

import { events } from '@events';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.MUSIC,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'music',
      onClick: () => events.canvas.add(Sections.MUSIC),
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

events.extensions.register(feature);
