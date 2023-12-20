import dynamic from 'next/dynamic';
import { Activity } from '@styled-icons/feather';

import { snakeSectionParser, snakeWorkflowParser } from './parser';
import { defaultSnakeSectionConfig } from './default-config';

import { events } from 'app';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.SNAKE,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: Activity,
      onClick: () => events.canvas.add(Sections.SNAKE),
      name: 'Snake',
    },

    sections: {
      component: dynamic(() =>
        import('./section').then(
          mod => mod.SnakeSection,
          () => () => null
        )
      ),
      parser: {
        readme: snakeSectionParser,
        workflow: snakeWorkflowParser,
      },
      defaultConfig: defaultSnakeSectionConfig,
    },

    panels: dynamic(() =>
      import('./panel').then(
        mod => mod.SnakePanel,
        () => () => null
      )
    ),
  },
};

events.extensions.register(feature);
