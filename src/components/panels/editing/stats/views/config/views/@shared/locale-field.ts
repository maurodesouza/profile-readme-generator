import { Inputs } from 'types';

const localeField = (graph: 'stats' | 'languages' | 'streak') => ({
  type: Inputs.SELECT,
  path: `content.graphs.${graph}.locale`,
  label: 'Translate',
  props: {
    column: '1 / 3',
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
