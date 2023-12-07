import { PieChart } from '@styled-icons/feather';

import { StatsEditPanel } from './panel';
import { StatsSection } from './section';
import { statsSectionParser } from './parser';
import { defaultStatsSectionConfig } from './default-config';

import { events } from 'app';
import { Sections } from 'types';

const feature = {
  id: Sections.STATS,

  presentation: {
    'new-section': {
      icon: PieChart,
      onClick: () => events.canvas.add(Sections.STATS),
      name: 'Stats',
    },
  },

  sections: {
    component: StatsSection,
    parser: {
      readme: statsSectionParser,
    },
    defaultConfig: defaultStatsSectionConfig,
  },

  panels: StatsEditPanel,
};

export default feature;
