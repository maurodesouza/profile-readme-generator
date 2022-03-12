import { Inputs } from 'types';

const fields = [
  {
    id: 1,
    label: 'Section styles',
    accordion: true,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'styles.align',
        label: 'Align',
        props: {
          options: [
            {
              label: 'Left',
              value: 'left',
            },
            {
              label: 'Center',
              value: 'center',
            },
            {
              label: 'Right',
              value: 'right',
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    label: 'Item styles',
    accordion: true,
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.styles.height',
        label: 'Height',
        props: {
          type: 'number',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'styles.spacing',
        label: 'Spacing',
        props: {
          type: 'number',
          min: 5,
        },
      },
    ],
  },
];

export { fields };
