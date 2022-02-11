import { Inputs } from 'types';

const localeField = (graph: 'stats' | 'languages') => ({
  type: Inputs.SELECT,
  path: `content.graphs.${graph}.locale`,
  label: 'Traduzir para',
  props: {
    options: [
      {
        label: 'Português',
        value: 'pt-br',
      },
      {
        label: 'Inglês',
        value: 'en',
      },
      {
        label: 'Francês',
        value: 'fr',
      },
      {
        label: 'Espanhol',
        value: 'es',
      },
      {
        label: 'Alemão',
        value: 'de',
      },
    ],
  },
});

export { localeField };
