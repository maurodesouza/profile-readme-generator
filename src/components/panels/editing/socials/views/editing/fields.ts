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
        label: 'Align content',
        props: {
          options: [
            {
              label: 'Esquerda',
              value: 'left',
            },
            {
              label: 'Centro',
              value: 'center',
            },
            {
              label: 'Direita',
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
        type: Inputs.SELECT,
        path: 'content.styles.type',
        label: 'Format',
        props: {
          options: [
            {
              label: 'Icons',
              value: 'icon',
            },
            {
              label: 'Badge',
              value: 'badge',
            },
          ],
        },
      },
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
        conditions: {
          path: 'props.content.styles.type',
          be: 'equal',
          value: 'icon',
        },
      },
      {
        type: Inputs.SELECT,
        path: 'content.styles.style',
        label: 'Badge style',
        props: {
          options: [
            {
              label: 'Plastic',
              value: 'plastic',
            },
            {
              label: 'Flat',
              value: 'flat',
            },
            {
              label: 'For the badge',
              value: 'for-the-badge',
            },
          ],
        },
        conditions: {
          path: 'props.content.styles.type',
          be: 'equal',
          value: 'badge',
        },
      },
    ],
  },
];

export { fields };
