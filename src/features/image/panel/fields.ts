import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.url',
        label: 'image/gif url',
        props: {},
      },
    ],
  },
  {
    id: 2,
    label: 'Layout',
    fields: [
      {
        type: Inputs.SELECT,
        path: 'styles.align',
        label: 'Align',
        props: {
          options: [
            {
              label: 'Right',
              value: 'right',
            },
            {
              label: 'Center',
              value: 'center',
            },
            {
              label: 'Left',
              value: 'left',
            },
          ],
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'styles.clear',
        label: 'Clear float',
      },
      {
        type: Inputs.TEXT,
        path: 'styles.height',
        label: 'Height',
        props: {
          type: 'number',
        },
      },
      {
        type: Inputs.SELECT,
        path: 'styles.float',
        label: 'Float',
        props: {
          options: [
            {
              label: 'None',
              value: 'none',
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
    ],
  },
];

export { groups };
