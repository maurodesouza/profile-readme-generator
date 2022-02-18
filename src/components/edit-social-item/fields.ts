import { Inputs } from 'types';

const groups = (path: string) => [
  {
    id: 1,
    fields: [
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.link`,
        label: 'Link (full) para o seu perfil',
        props: {
          placeholder: 'https://example.com/my-username',
        },
      },
    ],
  },
  {
    id: 2,
    label: 'Textos',
    accordion: true,
    columns: 2,
    fields: [
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.label`,
        label: 'Lado esquerdo',
        props: {},
      },
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.message`,
        label: 'Lado direito',
        props: {},
      },
    ],
    conditions: {
      path: 'props.content.styles.type',
      be: 'equal',
      value: 'badge',
    },
  },
  {
    id: 3,
    label: 'Cores',
    accordion: true,
    columns: 2,
    fields: [
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.logoColor`,
        label: 'Logo',
        props: {
          column: '1 / 3',
          placeholder: 'Cor em Hex',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.labelColor`,
        label: 'Lado esquerdo',
        props: {
          placeholder: 'Cor em Hex',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.color`,
        label: 'Lado direto',
        props: {
          placeholder: 'Cor em Hex',
        },
      },
    ],
    conditions: {
      path: 'props.content.styles.type',
      be: 'equal',
      value: 'badge',
    },
  },
];

export { groups };
