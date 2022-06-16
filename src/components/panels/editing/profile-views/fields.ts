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
        label: 'Format',
        props: {
          options: [
            {
              label: 'Default',
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
        label: 'Align',
        props: {
          options: [
            {
              label: 'Right',
              value: 'right',
            },
            {
              label: 'Center',
              value: 'center',
            },
            {
              label: 'Left',
              value: 'left',
            },
          ],
        },
      },
      {
        type: Inputs.SELECT,
        path: 'styles.float',
        label: 'Float',
        props: {
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Right',
              value: 'right',
            },
            {
              label: 'Left',
              value: 'left',
            },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    label: 'Badge customizations',
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.props.left_text',
        label: 'Custom text',
        props: {},
      },
      {
        type: Inputs.SELECT,
        path: 'content.props.left_color',
        label: 'Left color',
        props: {
          options: colorOptions,
        },
      },
      {
        type: Inputs.SELECT,
        path: 'content.props.right_color',
        label: 'Right color',
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
