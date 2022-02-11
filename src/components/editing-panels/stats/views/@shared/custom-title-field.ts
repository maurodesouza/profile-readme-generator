import { Inputs } from 'types';

const customTitleField = (graph: 'stats' | 'languages') => ({
  type: Inputs.TEXT,
  path: `content.graphs.${graph}.custom_title`,
  label: 'Título personalizado ',
  props: {},
});

export { customTitleField };
