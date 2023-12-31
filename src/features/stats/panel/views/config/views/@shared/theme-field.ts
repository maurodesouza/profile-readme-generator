import { themes } from 'resources';
import { Inputs } from 'types';

import { views } from '..';

const themeField = (graph: keyof typeof views) => ({
  type: Inputs.SELECT,
  path: `content.graphs.${graph}.theme`,
  label: 'Theme',
  props: {
    column: '1 / 3',
    clearable: true,
    options: themes,
  },
});

export { themeField };
