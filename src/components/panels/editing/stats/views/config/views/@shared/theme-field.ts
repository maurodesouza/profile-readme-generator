import { themes } from 'resources';
import { Inputs } from 'types';

const themeField = (graph: 'stats' | 'languages' | 'streak') => ({
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
