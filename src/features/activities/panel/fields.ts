import { themes } from 'resources';
import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'content.type',
        label: 'Origin',
        props: {
          options: [
            {
              label: 'Medium',
              value: 'medium',
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    label: 'Layout',
    accordion: true,
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
    ],
  },
  {
    id: 3,
    label: 'Medium options',
    accordion: true,
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.username',
        label: 'Medium username',
        props: {
          placeholder: 'Your username (without @)',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.limit',
        label: 'Post limit',
      },
      {
        type: Inputs.SELECT,
        path: `content.theme`,
        label: 'Theme',
        props: {
          clearable: true,
          options: themes,
        },
      },
    ],
  },
];

export { groups };
