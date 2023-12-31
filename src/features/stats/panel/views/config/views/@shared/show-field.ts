import { Inputs } from 'types';
import { views } from '..';

const showField = (graph: keyof typeof views) => ({
  type: Inputs.SWITCH,
  path: `content.graphs.${graph}.show`,
  label: 'Show',
  props: {
    direction: 'column',
  },
});

export { showField };
