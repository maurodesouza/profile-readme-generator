import dynamic from 'next/dynamic';

import { borderSectionParser } from './parser';
import { defaultImageSectionConfig } from './default-config';

import { events } from '@events';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.BORDER,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'square-dashed-top-solid',
      onClick: () => events.canvas.add(Sections.BORDER),
      name: 'Border',
    },

    sections: {
      component: dynamic(() =>
        import('./section').then(
          mod => mod.BorderSection,
          () => () => null
        )
      ),
      parser: {
        readme: borderSectionParser,
      },
      defaultConfig: defaultImageSectionConfig,
    },
    panels: dynamic(() =>
      import('./panel').then(
        mod => mod.BorderEditPanel,
        () => () => null
      )
    ),
  },
};

events.extensions.register(feature);
