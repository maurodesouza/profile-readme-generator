import {
  customTitleField,
  localeField,
  themeField,
  hideBorderField,
  hideTitleField,
} from '../@shared';
import { Inputs } from 'types';

const fields = [
  customTitleField('languages'),
  localeField('languages'),
  themeField('languages'),
  {
    type: Inputs.SELECT,
    path: 'content.graphs.languages.layout',
    label: 'Layout',
    props: {
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
  // {
  //   type: Inputs.TEXT,
  //   path: 'content.graphs.languages.card_width',
  //   label: 'Largura',
  //   props: {
  //     type: 'number',
  //     min: 0,
  //   },
  // },
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
  hideBorderField('languages'),
  hideTitleField('languages'),
];

export { fields };
