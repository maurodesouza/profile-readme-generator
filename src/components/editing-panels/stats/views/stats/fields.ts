import {
  customTitleField,
  localeField,
  themeField,
  hideBorderField,
  hideTitleField,
} from '../@shared';
import { Inputs } from 'types';

const fields = [
  customTitleField('stats'),
  localeField('stats'),
  themeField('stats'),
  {
    type: Inputs.SWITCH,
    path: 'content.graphs.stats.show_icons',
    label: 'Mostrar icones',
    props: {},
  },
  {
    type: Inputs.SWITCH,
    path: 'content.graphs.stats.hide_rank',
    label: 'Esconder rank',
    props: {},
  },
  hideTitleField('stats'),
  hideBorderField('stats'),
  {
    type: Inputs.SWITCH,
    path: 'content.graphs.stats.disable_animations',
    label: 'Desabilitar animações',
    props: {},
  },
  {
    type: Inputs.SWITCH,
    path: 'content.graphs.stats.include_all_commits',
    label: 'Incluir todos os commits',
    props: {},
  },
  {
    type: Inputs.SWITCH,
    path: 'content.graphs.stats.count_private',
    label: 'Incluir commits privados',
    props: {},
  },
];

export { fields };
