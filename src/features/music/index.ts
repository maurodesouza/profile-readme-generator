import dynamic from 'next/dynamic';
import { Music } from '@styled-icons/feather';

import { musicSectionParser } from './parser';
import { defaultMusicSectionConfig } from './default-config';

import { events } from 'app';
import { Sections } from 'types';

const feature = {
  id: Sections.MUSIC,

  presentation: {
    'new-section': {
      icon: Music,
      onClick: () => events.canvas.add(Sections.MUSIC),
      name: 'Music',
    },
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
};

events.extensions.register(feature);
