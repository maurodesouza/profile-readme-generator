import dynamic from 'next/dynamic';

import { activitiesSectionParser } from './parser';
import { defaultActivitiesSectionConfig } from './default-config';

import { events } from '@events';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.ACTIVITIES,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'activity',
      onClick: () => events.canvas.add(Sections.ACTIVITIES),
      name: 'My activities',
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
  },
};

events.extensions.register(feature);
