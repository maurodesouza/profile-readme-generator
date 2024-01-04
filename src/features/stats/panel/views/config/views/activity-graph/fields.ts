import { customTitleField, showField } from '../@shared';
import { Inputs } from 'types';

const groups = [
  {
    id: 1,

    fields: [showField('activity-graph'), customTitleField('activity-graph')],
  },
  {
    id: 2,
    label: 'Theme',
    columns: 2,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'content.graphs.activity-graph.theme',
        label: 'Base theme',
        props: {
          column: '1 / 3',
          clearable: true,
          options: [
            {
              label: 'Cotton Candy',
              value: 'cotton-candy',
            },
            {
              label: 'Redical',
              value: 'redical',
            },
            {
              label: 'Coral',
              value: 'coral',
            },
            {
              label: 'Nord',
              value: 'nord',
            },
            {
              label: 'Lucent',
              value: 'lucent',
            },
            {
              label: 'Dracula',
              value: 'dracula',
            },
            {
              label: 'Gruvbox',
              value: 'gruvbox',
            },
            {
              label: 'Chartreuse Dark',
              value: 'chartreuse-dark',
            },
            {
              label: 'Github Light',
              value: 'github-light',
            },
            {
              label: 'Github Dark',
              value: 'github-dark',
            },
            {
              label: 'Github Dark Dimmed',
              value: 'github-dark-dimmed',
            },
            {
              label: 'Minimal',
              value: 'minimal',
            },
            {
              label: 'Material Palenight',
              value: 'material-palenight',
            },
            {
              label: 'Green',
              value: 'green',
            },
            {
              label: 'Gotham',
              value: 'gotham',
            },
            {
              label: 'Noctis Minimus',
              value: 'noctis-minimus',
            },
            {
              label: 'Monokai',
              value: 'monokai',
            },
            {
              label: 'One Dark',
              value: 'one-dark',
            },
            {
              label: 'Elegant',
              value: 'elegant',
            },
            {
              label: 'Aqua',
              value: 'aqua',
            },
            {
              label: 'Synthwave 84',
              value: 'synthwave-84',
            },
            {
              label: 'React',
              value: 'react',
            },
            {
              label: 'Merko',
              value: 'merko',
            },
            {
              label: 'Vue',
              value: 'vue',
            },
            {
              label: 'Tokyo Day',
              value: 'tokyo-day',
            },
            {
              label: 'Tokyo Night',
              value: 'tokyo-night',
            },
            {
              label: 'High Contrast',
              value: 'high-contrast',
            },
            {
              label: 'Cobalt',
              value: 'cobalt',
            },
            {
              label: 'Material',
              value: 'material',
            },
            {
              label: 'Nightowl',
              value: 'nightowl',
            },
            {
              label: 'Modern Lilac',
              value: 'modern-lilac',
            },
            {
              label: 'Arctic',
              value: 'arctic',
            },
          ],
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.graphs.activity-graph.bg_color`,
        label: 'Background color',
        props: {
          placeholder: 'hex color (without #)',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.graphs.activity-graph.color`,
        label: 'Text color',
        props: {
          placeholder: 'hex color (without #)',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.graphs.activity-graph.title_color`,
        label: 'Title color',
        props: {
          placeholder: 'hex color (without #)',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.graphs.activity-graph.line`,
        label: 'Line color',
        props: {
          placeholder: 'hex color (without #)',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.graphs.activity-graph.point`,
        label: 'Point color',
        props: {
          placeholder: 'hex color (without #)',
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.graphs.activity-graph.area_color`,
        label: 'Area color',
        props: {
          placeholder: 'hex color (without #)',
        },
      },
    ],
  },
  {
    id: 3,
    label: 'Layout',
    columns: 2,
    fields: [
      {
        type: Inputs.TEXT,
        path: `content.graphs.activity-graph.height`,
        label: 'Height',
        props: {
          type: 'number',
          min: 200,
          max: 600,
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.graphs.activity-graph.radius`,
        label: 'Border radius',
        props: {
          type: 'number',
          min: 0,
          max: 16,
        },
      },
      {
        type: Inputs.SWITCH,
        path: `content.graphs.activity-graph.area`,
        label: 'Shows area under the graph',
        props: {
          column: '1 / 3',
        },
      },
      {
        type: Inputs.SWITCH,
        path: `content.graphs.activity-graph.hide_border`,
        label: 'Hide border',
      },
      {
        type: Inputs.SWITCH,
        path: `content.graphs.activity-graph.hide_title`,
        label: 'Hide title',
      },
    ],
  },
];

export { groups };
