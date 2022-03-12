import { Inputs } from 'types';

const customTitleField = (graph: 'stats' | 'languages') => ({
  type: Inputs.TEXT,
  path: `content.graphs.${graph}.custom_title`,
  label: 'Custom title',
  props: {},
});

export { customTitleField };
