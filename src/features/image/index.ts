import { Image } from '@styled-icons/feather';

import { ImageEditPanel } from './panel';
import { ImageSection } from './section';
import { imageSectionParser } from './parser';
import { defaultImageSectionConfig } from './default-config';

import { events } from 'app';
import { Sections } from 'types';

const feature = {
  id: Sections.IMAGE,

  presentation: {
    'new-section': {
      icon: Image,
      onClick: () => events.canvas.add(Sections.IMAGE),
      name: 'Image',
    },
  },

  sections: {
    component: ImageSection,
    parser: {
      readme: imageSectionParser,
    },
    defaultConfig: defaultImageSectionConfig,
  },

  panels: ImageEditPanel,
};

events.extensions.register(feature);
