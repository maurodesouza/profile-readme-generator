import { Inputs } from 'types';

const fields = [
  {
    id: 1,
    label: 'Estilos da seção',
    accordion: true,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'styles.align',
        label: 'Alinhamento',
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
    label: 'Estilo geral dos items',
    accordion: true,
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.styles.height',
        label: 'Altura',
        props: {
          type: 'number',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'styles.spacing',
        label: 'Espaçamento',
        props: {
          type: 'number',
          min: 5,
        },
      },
    ],
  },
];

export { fields };
