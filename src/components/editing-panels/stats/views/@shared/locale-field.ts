import { Inputs } from 'types';

const localeField = (graph: 'stats' | 'languages') => ({
  type: Inputs.SELECT,
  path: `content.graphs.${graph}.locale`,
  label: 'Translate',
  props: {
    options: [
      {
        label: 'Portuguese',
        value: 'pt-br',
      },
      {
        label: 'English',
        value: 'en',
      },
      {
        label: 'French',
        value: 'fr',
      },
      {
        label: 'Spanish',
        value: 'es',
      },
      {
        label: 'German',
        value: 'de',
      },
    ],
  },
});

export { localeField };
