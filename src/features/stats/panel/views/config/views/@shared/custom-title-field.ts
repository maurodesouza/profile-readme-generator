import { Inputs } from 'types';

const customTitleField = (graph: 'stats' | 'languages' | 'activity-graph') => ({
  type: Inputs.TEXT,
  path: `content.graphs.${graph}.custom_title`,
  label: 'Custom title',
  props: {
    column: '1 / 3',
  },
});

export { customTitleField };
