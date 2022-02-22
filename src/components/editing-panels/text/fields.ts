import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    label: 'Layout',
    fields: [
      {
        type: Inputs.SELECT,
        path: 'styles.align',
        label: 'Alinhamento',
        props: {
          options: [
            {
              label: 'Direita',
              value: 'right',
            },
            {
              label: 'Centro',
              value: 'center',
            },
            {
              label: 'Esquerda',
              value: 'left',
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    label: 'Conteúdo',
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.text',
        label: 'Texto',
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
