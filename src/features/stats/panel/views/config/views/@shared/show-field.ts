import { Inputs } from 'types';

const showField = (graph: 'stats' | 'languages' | 'streak') => ({
  type: Inputs.SWITCH,
  path: `content.graphs.${graph}.show`,
  label: 'Show',
  props: {
    direction: 'column',
  },
});

export { showField };
