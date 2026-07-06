import dynamic from 'next/dynamic';

import { statsSectionParser, statsWorkflowParser } from './parser';
import { defaultStatsSectionConfig } from './default-config';

import { actions } from 'lib/command';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.STATS,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'pie-chart',
      onClick: () => actions.canvas.add(Sections.STATS),
      name: 'Stats',
    },

    sections: {
      component: dynamic(() =>
        import('./section').then(
          mod => mod.StatsSection,
          () => () => null
        )
      ),
      parser: {
        readme: statsSectionParser,
        workflow: statsWorkflowParser,
      },
      defaultConfig: defaultStatsSectionConfig,
    },

    panels: dynamic(() =>
      import('./panel').then(
        mod => mod.StatsEditPanel,
        () => () => null
      )
    ),
  },
};

actions.extensions.register(feature);
