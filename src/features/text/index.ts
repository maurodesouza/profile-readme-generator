import dynamic from 'next/dynamic';

import { textSectionParser } from './parser';
import { defaultTextSectionConfig } from './default-config';

import { actions } from 'lib/command';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: 'text',

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'type',
      onClick: () => actions.canvas.add(Sections.TEXT),
      name: 'Text',
    },

    sections: {
      component: dynamic(() =>
        import('./section').then(
          mod => mod.TextSection,
          () => () => null
        )
      ),
      parser: {
        readme: textSectionParser,
      },
      defaultConfig: defaultTextSectionConfig,
    },

    panels: dynamic(() =>
      import('./panel').then(
        mod => mod.TextEditPanel,
        () => () => null
      )
    ),
  },
};

actions.extensions.register(feature);
