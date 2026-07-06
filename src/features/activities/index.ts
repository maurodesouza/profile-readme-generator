import dynamic from 'next/dynamic';

import { activitiesSectionParser } from './parser';
import { defaultActivitiesSectionConfig } from './default-config';

import { actions } from 'lib/command';
import { PanelsEnum, Sections } from 'types';

const feature = {
  id: Sections.ACTIVITIES,

  presentation: {
    [PanelsEnum.NEW_SECTION]: {
      icon: 'activity',
      onClick: () => actions.canvas.add(Sections.ACTIVITIES),
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

actions.extensions.register(feature);
