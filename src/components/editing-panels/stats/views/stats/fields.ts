import { customTitleField, localeField, themeField } from '../@shared';
import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    fields: [customTitleField('stats'), localeField('stats')],
  },
  {
    id: 2,
    label: 'Layout',
    columns: 2,
    fields: [
      {
        type: Inputs.SWITCH,
        path: 'content.graphs.stats.show_icons',
        label: 'Mostrar icones',
        props: {
          direction: 'column',
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'content.graphs.stats.hide_rank',
        label: 'Esconder rank',
        props: {
          direction: 'column',
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'content.graphs.stats.hide_title',
        label: 'Esconder título',
        props: {
          direction: 'column',
        },
      },
      {
        type: Inputs.SWITCH,
        path: `content.graphs.stats.hide_border`,
        label: 'Esconder borda',
        props: {
          direction: 'column',
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'content.graphs.stats.disable_animations',
        label: 'Desabilitar animações',
        props: {
          column: '1 / 3',
        },
      },
      themeField('stats'),
    ],
  },
  {
    id: 3,
    label: 'Commits',
    fields: [
      {
        type: Inputs.SWITCH,
        path: 'content.graphs.stats.include_all_commits',
        label: 'Incluir todos',
        props: {},
      },
      {
        type: Inputs.SWITCH,
        path: 'content.graphs.stats.count_private',
        label: 'Incluir privados',
        props: {},
      },
    ],
  },
];

export { groups };
