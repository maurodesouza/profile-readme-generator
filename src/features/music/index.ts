import { Music } from '@styled-icons/feather';

import { MusicEditPanel } from './panel';
import { MusicSection } from './section';
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
    component: MusicSection,
    parser: {
      readme: musicSectionParser,
    },
    defaultConfig: defaultMusicSectionConfig,
  },

  panels: MusicEditPanel,
};

export default feature;
