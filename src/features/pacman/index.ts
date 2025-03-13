import dynamic from 'next/dynamic';
import { Gitlab } from '@styled-icons/feather';

import { pacmanSectionParser, pacmanWorkflowParser } from './parser';
import { defaultPacmanSectionConfig } from './default-config';

import { events } from 'app';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.PACMAN,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: Gitlab,
      onClick: () => events.canvas.add(Sections.PACMAN),
      name: 'Pacman',
    },

    sections: {
      component: dynamic(() =>
        import('./section').then(
          mod => mod.PacmanSection,
          () => () => null
        )
      ),
      parser: {
        readme: pacmanSectionParser,
        workflow: pacmanWorkflowParser,
      },
      defaultConfig: defaultPacmanSectionConfig,
    },

    panels: dynamic(() =>
      import('./panel').then(
        mod => mod.PacmanPanel,
        () => () => null
      )
    ),
  },
};

events.extensions.register(feature);
