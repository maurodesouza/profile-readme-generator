import { Inputs } from 'types';

const groups = (path: string) => [
  {
    id: 1,
    fields: [
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.link`,
        label: 'Full link to your profile',
        props: {
          placeholder: 'https://example.com/my-username',
        },
      },
    ],
  },
  {
    id: 2,
    label: 'Texts',
    accordion: true,
    columns: 2,
    fields: [
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.label`,
        label: 'Left side',
        props: {},
      },
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.message`,
        label: 'Right side',
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
    label: 'Colors',
    accordion: true,
    columns: 2,
    fields: [
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.logoColor`,
        label: 'Logo',
        props: {
          column: '1 / 3',
          placeholder: 'Hex color',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.labelColor`,
        label: 'Left side',
        props: {
          placeholder: 'Hex color',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.socials.${path}.color`,
        label: 'Right side',
        props: {
          placeholder: 'Hex color',
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
