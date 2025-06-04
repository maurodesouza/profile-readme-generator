import { Inputs } from 'types';

const groups = [
  {
    id: 1,
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
    ],
  },
  {
    id: 2,
    label: 'Content',
    fields: [
      {
        type: Inputs.TEXTAREA,
        path: 'content.text',
        label: 'Text',
        props: {
          as: 'textarea',
        },
      },
      {
        type: Inputs.SELECT,
        path: 'content.as',
        label: 'Tag',
        props: {
          options: [
            {
              label: 'H1',
              value: 'h1',
            },
            {
              label: 'H2',
              value: 'h2',
            },
            {
              label: 'H3',
              value: 'h3',
            },
            {
              label: 'H4',
              value: 'h4',
            },
            {
              label: 'H5',
              value: 'h5',
            },
            {
              label: 'H6',
              value: 'h6',
            },
            {
              label: 'p',
              value: 'p',
            },
          ],
        },
      },
    ],
  },
];

export { groups };
