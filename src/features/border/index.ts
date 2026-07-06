import dynamic from 'next/dynamic';

import { borderSectionParser } from './parser';
import { defaultImageSectionConfig } from './default-config';

import { actions } from 'lib/command';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.BORDER,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'square-dashed-top-solid',
      onClick: () => actions.canvas.add(Sections.BORDER),
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

actions.extensions.register(feature);
