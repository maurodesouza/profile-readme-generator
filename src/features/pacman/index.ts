import dynamic from 'next/dynamic';

import { pacmanSectionParser, pacmanWorkflowParser } from './parser';
import { defaultPacmanSectionConfig } from './default-config';

import { actions } from 'lib/command';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.PACMAN,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'ghost',
      onClick: () => actions.canvas.add(Sections.PACMAN),
      name: 'Arcade games',
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

actions.extensions.register(feature);
