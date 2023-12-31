import { showField } from '../@shared';
import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    fields: [showField('trophy')],
  },
  {
    id: 2,
    label: 'Layout',
    columns: 2,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'content.graphs.trophy.theme',
        label: 'Theme',
        props: {
          column: '1 / 3',
          clearable: true,
          options: [
            { label: 'Flat', value: 'flat' },
            { label: 'Onedark', value: 'onedark' },
            { label: 'Gruvbox', value: 'gruvbox' },
            { label: 'Dracula', value: 'dracula' },
            { label: 'Monokai', value: 'monokai' },
            { label: 'Chalk', value: 'chalk' },
            { label: 'Nord', value: 'nord' },
            { label: 'Alduin', value: 'alduin' },
            { label: 'Darkhub', value: 'darkhub' },
            { label: 'Juicyfresh', value: 'juicyfresh' },
            { label: 'Buddhism', value: 'buddhism' },
            { label: 'Oldie', value: 'oldie' },
            { label: 'Radical', value: 'radical' },
            { label: 'Onestar', value: 'onestar' },
            { label: 'Discord', value: 'discord' },
            { label: 'Algolia', value: 'algolia' },
            { label: 'Gitdimmed', value: 'gitdimmed' },
            { label: 'Tokyonight', value: 'tokyonight' },
            { label: 'Matrix', value: 'matrix' },
            { label: 'Apprentice', value: 'apprentice' },
            { label: 'Dark Dimmed', value: 'dark_dimmed' },
            { label: 'Dark Lover', value: 'dark_lover' },
            { label: 'Kimbie Dark', value: 'kimbie_dark' },
          ],
        },
      },

      {
        type: Inputs.TEXT,
        path: `content.graphs.trophy.column`,
        label: 'Columns',
        props: {
          type: 'number',
          min: -1,
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.graphs.trophy.row`,
        label: 'Rows',
        props: {
          type: 'number',
          min: 1,
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.graphs.trophy.margin-w`,
        label: 'Column gap',
        props: {
          type: 'number',
          min: 0,
        },
      },
      {
        type: Inputs.TEXT,
        path: `content.graphs.trophy.margin-h`,
        label: 'Row gap',
        props: {
          type: 'number',
          min: 0,
        },
      },
      {
        type: Inputs.SWITCH,
        path: `content.graphs.trophy.no-frame`,
        label: 'Hide border',
      },
      {
        type: Inputs.SWITCH,
        path: 'content.graphs.trophy.no-bg',
        label: 'Transparent background',
      },
    ],
  },
];

export { groups };
