import { color_names } from 'resources';
import { Inputs } from 'types';

const colorOptions = [{ value: '', label: 'default' }].concat(
  Object.keys(color_names).map(name => ({
    value: name,
    label: name,
  }))
);

const groups = [
  {
    id: 1,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'content.type',
        label: 'Formato da visualização',
        props: {
          options: [
            {
              label: 'Padrão',
              value: 'default',
            },
            {
              label: 'Badge',
              value: 'badge',
            },
          ],
        },
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
        type: Inputs.SELECT,
        path: 'styles.float',
        label: 'Flutuar para',
        props: {
          options: [
            {
              label: 'Não flutuar',
              value: 'none',
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
  {
    id: 3,
    label: 'Customizações para a badge',
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.props.left_text',
        label: 'Texto customizado',
        props: {},
      },
      {
        type: Inputs.SELECT,
        path: 'content.props.left_color',
        label: 'Cor da esquerda',
        props: {
          options: colorOptions,
        },
      },
      {
        type: Inputs.SELECT,
        path: 'content.props.right_color',
        label: 'Cor da direita',
        props: {
          options: colorOptions,
        },
      },
    ],
    conditions: {
      path: 'props.content.type',
      be: 'equal',
      value: 'badge',
    },
  },
];

export { groups };
