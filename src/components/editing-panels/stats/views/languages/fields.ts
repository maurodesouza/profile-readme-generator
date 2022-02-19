import { customTitleField, localeField, themeField } from '../@shared';
import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    fields: [customTitleField('languages'), localeField('languages')],
  },
  {
    id: 2,
    label: 'Layout',
    columns: 2,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'content.graphs.languages.layout',
        label: 'Tipo',
        props: {
          column: '1 / 3',
          options: [
            {
              label: 'Compacto',
              value: 'compact',
            },
            {
              label: 'Padrão',
              value: 'default ',
            },
          ],
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.graphs.languages.height',
        label: 'Altura',
        props: {
          type: 'number',
          min: 0,
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.graphs.languages.langs_count',
        label: 'Total de linguagens',
        props: {
          type: 'number',
          min: 1,
          max: 12,
        },
      },
      themeField('languages'),
      {
        type: Inputs.SWITCH,
        path: 'content.graphs.languages.hide_title',
        label: 'Esconder título',
        props: {
          direction: 'column',
        },
      },
      {
        type: Inputs.SWITCH,
        path: `content.graphs.languages.hide_border`,
        label: 'Esconder borda',
        props: {
          direction: 'column',
        },
      },
    ],
  },
];

export { groups };
