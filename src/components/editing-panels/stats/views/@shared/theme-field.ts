import { Inputs } from 'types';

const themeField = (graph: 'stats' | 'languages') => ({
  type: Inputs.SELECT,
  path: `content.graphs.${graph}.theme`,
  label: 'Theme',
  props: {
    column: '1 / 3',
    clearable: true,
    options: [
      {
        label: 'Dracula',
        value: 'dracula',
      },
      {
        label: 'Dark',
        value: 'dark',
      },
      {
        label: 'Radical',
        value: 'radical',
      },
      {
        label: 'Merko',
        value: 'merko',
      },
      {
        label: 'Gruvbox',
        value: 'gruvbox',
      },
      {
        label: 'Tokyonight',
        value: 'tokyonight',
      },
      {
        label: 'Onedark',
        value: 'onedark',
      },
      {
        label: 'Cobalt',
        value: 'cobalt',
      },
      {
        label: 'Synthwave',
        value: 'synthwave',
      },
      {
        label: 'Highcontrast',
        value: 'highcontrast',
      },
    ],
  },
});

export { themeField };
