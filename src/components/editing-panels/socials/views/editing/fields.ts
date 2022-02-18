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
        type: Inputs.SELECT,
        path: 'content.styles.type',
        label: 'Mostrar no formato de',
        props: {
          options: [
            {
              label: 'Icones',
              value: 'icon',
            },
            {
              label: 'Badges',
              value: 'badge',
            },
          ],
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.styles.height',
        label: 'Altura',
        props: {
          type: 'number',
        },
      },
      {
        type: Inputs.SELECT,
        path: 'content.styles.style',
        label: 'Formato das badges',
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
            // {
            //   label: 'Social',
            //   value: 'social',
            // },
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
