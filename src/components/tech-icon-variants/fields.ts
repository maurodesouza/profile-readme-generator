import { Inputs } from 'types';

const groups = (path: string, provider: string) => [
  {
    id: 1,
    label: 'Texts',
    accordion: true,
    columns: 2,
    fields: [
      {
        type: Inputs.TEXT,
        path: `content.icons.${path}.config.${provider}.label`,
        label: 'Left side',
        props: {},
      },
      {
        type: Inputs.TEXT,
        path: `content.icons.${path}.config.${provider}.message`,
        label: 'Right side',
        props: {},
      },
    ],
    conditions: {
      path: `props.content.icons.${path}.currentProvider`,
      be: 'equal',
      value: 'shields',
    },
  },
  {
    id: 2,
    label: 'Colors',
    accordion: true,
    columns: 2,
    fields: [
      {
        type: Inputs.TEXT,
        path: `content.icons.${path}.config.${provider}.logoColor`,
        label: 'Logo',
        props: {
          column: '1 / 3',
          placeholder: 'Hex color',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.icons.${path}.config.${provider}.labelColor`,
        label: 'Left side',
        props: {
          placeholder: 'Hex color',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.icons.${path}.config.${provider}.color`,
        label: 'Right side',
        props: {
          placeholder: 'Hex color',
        },
      },
    ],
    conditions: {
      path: `props.content.icons.${path}.currentProvider`,
      be: 'equal',
      value: 'shields',
    },
  },
];

export { groups };
