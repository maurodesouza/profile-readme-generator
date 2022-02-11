import { Inputs } from 'types';

const hideTitleField = (graph: 'stats' | 'languages') => ({
  type: Inputs.SWITCH,
  path: `content.graphs.${graph}.hide_title`,
  label: 'Esconder título',
  props: {},
});

export { hideTitleField };
