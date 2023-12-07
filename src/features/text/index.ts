import { Type } from '@styled-icons/feather';

import { TextEditPanel } from './panel';
import { TextSection } from './section';
import { textSectionParser } from './parser';
import { defaultTextSectionConfig } from './default-config';

import { events } from 'app';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: 'text',

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: Type,
      onClick: () => events.canvas.add(Sections.TEXT),
      name: 'Text',
    },

    sections: {
      component: TextSection,
      parser: {
        readme: textSectionParser,
      },
      defaultConfig: defaultTextSectionConfig,
    },

    panels: TextEditPanel,
  },
};

events.extensions.register(feature);
