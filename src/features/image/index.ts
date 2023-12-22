import dynamic from 'next/dynamic';

import { Image } from '@styled-icons/feather';

import { imageSectionParser } from './parser';
import { defaultImageSectionConfig } from './default-config';

import { events } from 'app';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.IMAGE,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: Image,
      onClick: () => events.canvas.add(Sections.IMAGE),
      name: 'Image',
    },

    sections: {
      component: dynamic(() =>
        import('./section').then(
          mod => mod.ImageSection,
          () => () => null
        )
      ),
      parser: {
        readme: imageSectionParser,
      },
      defaultConfig: defaultImageSectionConfig,
    },
    panels: dynamic(() =>
      import('./panel').then(
        mod => mod.ImageEditPanel,
        () => () => null
      )
    ),
  },
};

events.extensions.register(feature);
