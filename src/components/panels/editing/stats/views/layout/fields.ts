import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'styles.align',
        label: 'Align',
        props: {
          options: [
            {
              label: 'Center',
              value: 'center',
            },
            {
              label: 'Right',
              value: 'right',
            },
            {
              label: 'Left',
              value: 'left',
            },
          ],
        },
      },
      {
        type: Inputs.SELECT,
        path: 'styles.direction',
        label: 'Direction',
        props: {
          options: [
            {
              label: 'Row',
              value: 'row',
            },
            {
              label: 'Column',
              value: 'column',
            },
          ],
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'styles.clear',
        label: 'Clear float',
      },
    ],
  },
];

export { groups };
