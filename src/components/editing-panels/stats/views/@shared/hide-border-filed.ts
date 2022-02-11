import { Inputs } from 'types';

const hideBorderField = (graph: 'stats' | 'languages') => ({
  type: Inputs.SWITCH,
  path: `content.graphs.${graph}.hide_border`,
  label: 'Esconder borda',
  props: {},
});

export { hideBorderField };
