import { Activity } from '@styled-icons/feather';

import { SnakePanel } from './panel';
import { SnakeSection } from './section';
import { snakeSectionParser, snakeWorkflowParser } from './parser';
import { defaultSnakeSectionConfig } from './default-config';

import { events } from 'app';
import { Sections } from 'types';

const feature = {
  id: Sections.SNAKE,

  presentation: {
    'new-section': {
      icon: Activity,
      onClick: () => events.canvas.add(Sections.SNAKE),
      name: 'Snake',
    },
  },

  sections: {
    component: SnakeSection,
    parser: {
      readme: snakeSectionParser,
      workflow: snakeWorkflowParser,
    },
    defaultConfig: defaultSnakeSectionConfig,
  },

  panels: SnakePanel,
};

export default feature;
