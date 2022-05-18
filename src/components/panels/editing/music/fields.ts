import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'content.type',
        label: 'Type',
        props: {
          options: [
            {
              label: 'Recently',
              value: 'recently',
            },
            {
              label: 'Currently',
              value: 'currently',
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
              label: 'Direita',
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
    ],
  },
];

export { groups };
