import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'styles.align',
        label: 'Alinhar cards',
        props: {
          options: [
            {
              label: 'Centro',
              value: 'center',
            },
            {
              label: 'Direita',
              value: 'right',
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
];

export { groups };
