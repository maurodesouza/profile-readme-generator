import { Inputs } from 'types';

const fields = [
  {
    type: Inputs.TEXT,
    path: 'content.from.username',
    label: 'Seu usuário do Github',
    props: {},
  },
  {
    type: Inputs.SELECT,
    path: 'content.styles.align',
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
];

export { fields };
