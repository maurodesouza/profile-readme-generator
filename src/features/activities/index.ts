import { Star } from '@styled-icons/feather';

import { ActivitiesEditPanel } from './panel';
import { ActivitiesSection } from './section';
import { activitiesSectionParser } from './parser';
import { defaultActivitiesSectionConfig } from './default-config';

import { events } from 'app';
import { Sections } from 'types';

const feature = {
  id: Sections.ACTIVITIES,

  presentation: {
    'new-section': {
      icon: Star,
      onClick: () => events.canvas.add(Sections.ACTIVITIES),
      name: 'My activities',
    },
  },

  sections: {
    component: ActivitiesSection,
    parser: {
      readme: activitiesSectionParser,
    },
    defaultConfig: defaultActivitiesSectionConfig,
  },

  panels: ActivitiesEditPanel,
};

export default feature;
