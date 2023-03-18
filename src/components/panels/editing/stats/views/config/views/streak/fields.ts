import { showField, localeField, themeField } from '../@shared';
import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    fields: [
      showField('streak'),
      {
        type: Inputs.SELECT,
        path: 'content.graphs.streak.date_format',
        label: 'Date format',
        props: {
          column: '1 / 3',
          options: [
            {
              label: 'Default',
              value: '',
            },
            {
              label: 'Aug 10, 2016',
              value: 'M j[, Y]',
            },
            {
              label: '10 Aug 2016',
              value: 'j M[ Y]',
            },
            {
              label: '2016 Aug 10',
              value: '[Y ]M j',
            },
            {
              label: '10/8/2016',
              value: 'j/n[/Y]',
            },
            {
              label: '8/10/2016',
              value: 'n/j[/Y]',
            },
            {
              label: '2016.8.10',
              value: '[Y.]n.j',
            },
          ],
        },
      },
      {
        type: Inputs.SELECT,
        path: 'content.graphs.streak.mode',
        label: 'Streak Mode',
        props: {
          column: '1 / 3',
          options: [
            {
              label: 'Daily',
              value: 'daily',
            },
            {
              label: 'Weekly',
              value: 'weekly',
            },
          ],
        },
      },
      localeField('streak'),
    ],
  },
  {
    id: 3,
    label: 'Layout',
    columns: 2,
    fields: [
      themeField('streak'),
      {
        type: Inputs.TEXT,
        path: `content.graphs.streak.border_radius`,
        label: 'Border radius',
        props: {
          type: 'number',
          min: 0,
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.graphs.streak.height',
        label: 'Height',
        props: {
          type: 'number',
          min: 0,
        },
      },
      {
        type: Inputs.SWITCH,
        path: `content.graphs.streak.hide_border`,
        label: 'Hide border',
        props: {
          direction: 'column',
        },
      },
    ],
  },
];

export { groups };
