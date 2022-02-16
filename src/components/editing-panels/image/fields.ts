import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.url',
        label: 'Url da imagem/gif',
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
      {
        type: Inputs.TEXT,
        path: 'styles.height',
        label: 'Altura',
        props: {
          type: 'number',
        },
      },
    ],
  },
];

export { groups };
