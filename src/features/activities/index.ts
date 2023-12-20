import dynamic from 'next/dynamic';
import { Star } from '@styled-icons/feather';

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
    component: dynamic(() =>
      import('./section').then(
        mod => mod.ActivitiesSection,
        () => () => null
      )
    ),
    parser: {
      readme: activitiesSectionParser,
    },
    defaultConfig: defaultActivitiesSectionConfig,
  },

  panels: dynamic(() =>
    import('./panel').then(
      mod => mod.ActivitiesEditPanel,
      () => () => null
    )
  ),
};

events.extensions.register(feature);
