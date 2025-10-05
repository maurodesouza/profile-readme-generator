import { color_names } from 'resources';
import { Inputs } from 'types';

const colorOptions = [{ value: '', label: 'default' }].concat(
  Object.keys(color_names).map(name => ({
    value: name,
    label: name,
  }))
);

const groups = [
  {
    id: 1,
    label: 'Layout',
    accordion: true,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'styles.align',
        label: 'Align',
        props: {
          options: [
            {
              label: 'Right',
              value: 'right',
            },
            {
              label: 'Center',
              value: 'center',
            },
            {
              label: 'Left',
              value: 'left',
            },
          ],
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'styles.clear',
        label: 'Clear float',
      },
      {
        type: Inputs.SELECT,
        path: 'styles.float',
        label: 'Float',
        props: {
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'Right',
              value: 'right',
            },
            {
              label: 'Left',
              value: 'left',
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    fields: [
      {
        type: Inputs.SELECT,
        path: 'content.provider',
        label: 'Provider',
        props: {
          options: [
            {
              label: 'Laobi (badge)',
              value: 'laobi',
            },
            {
              label: 'Get Loli',
              value: 'getloli',
            },
          ],
        },
      },
    ],
  },

  {
    id: 3,
    label: 'Badge Config',
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.views.laobi.left_text',
        label: 'Custom text',
        props: {},
      },
      {
        type: Inputs.SELECT,
        path: 'content.views.laobi.left_color',
        label: 'Left color',
        props: {
          options: colorOptions,
        },
      },
      {
        type: Inputs.SELECT,
        path: 'content.views.laobi.right_color',
        label: 'Right color',
        props: {
          options: colorOptions,
        },
      },
    ],
    conditions: {
      path: 'props.content.provider',
      be: 'equal',
      value: 'laobi',
    },
  },
  {
    id: 4,
    columns: 2,
    label: 'Loli Config',
    fields: [
      {
        type: Inputs.SELECT,
        path: 'content.views.getloli.theme',
        label: 'Theme',
        props: {
          column: '1 / 3',
          options: [
            { label: '3d Num', value: '3d-num' },
            { label: 'Ai 1', value: 'ai-1' },
            { label: 'Asoul', value: 'asoul' },
            { label: 'Booru Ffsr', value: 'booru-ffsr' },
            { label: 'Booru Helltaker', value: 'booru-helltaker' },
            { label: 'Booru Huggboo', value: 'booru-huggboo' },
            { label: 'Booru Jaypee', value: 'booru-jaypee' },
            { label: 'Booru Koe', value: 'booru-koe' },
            { label: 'Booru Lewd', value: 'booru-lewd' },
            { label: 'Booru Lisu', value: 'booru-lisu' },
            { label: 'Booru Mjg', value: 'booru-mjg' },
            { label: 'Booru Mof', value: 'booru-mof' },
            { label: 'Booru Nandroid', value: 'booru-nandroid' },
            { label: 'Booru Qualityhentais', value: 'booru-qualityhentais' },
            { label: 'Booru R6gdrawfriends', value: 'booru-r6gdrawfriends' },
            { label: 'Booru Rfck', value: 'booru-rfck' },
            { label: 'Booru Smtg', value: 'booru-smtg' },
            { label: 'Booru Snyde', value: 'booru-snyde' },
            { label: 'Booru The Collection', value: 'booru-the-collection' },
            { label: 'Booru Touhoulat', value: 'booru-touhoulat' },
            {
              label: 'Booru Townofgravityfalls',
              value: 'booru-townofgravityfalls',
            },
            { label: 'Booru Twifanartsfw', value: 'booru-twifanartsfw' },
            { label: 'Booru Ve', value: 'booru-ve' },
            { label: 'Booru Vivi', value: 'booru-vivi' },
            { label: 'Booru Vp', value: 'booru-vp' },
            { label: 'Booru Yuyuyui', value: 'booru-yuyuyui' },
            { label: 'Capoo 1', value: 'capoo-1' },
            { label: 'Capoo 2', value: 'capoo-2' },
            { label: 'E621', value: 'e621' },
            { label: 'Food', value: 'food' },
            { label: 'Gelbooru', value: 'gelbooru' },
            { label: 'Gelbooru H', value: 'gelbooru-h' },
            { label: 'Green', value: 'green' },
            { label: 'Kasuterura 1', value: 'kasuterura-1' },
            { label: 'Kasuterura 2', value: 'kasuterura-2' },
            { label: 'Kasuterura 3', value: 'kasuterura-3' },
            { label: 'Kasuterura 4', value: 'kasuterura-4' },
            { label: 'Kyun', value: 'kyun' },
            { label: 'Love And Deepspace', value: 'love-and-deepspace' },
            { label: 'Miku', value: 'miku' },
            { label: 'Minecraft', value: 'minecraft' },
            { label: 'Moebooru', value: 'moebooru' },
            { label: 'Moebooru H', value: 'moebooru-h' },
            { label: 'Morden Num', value: 'morden-num' },
            { label: 'Nixietube 1', value: 'nixietube-1' },
            { label: 'Nixietube 2', value: 'nixietube-2' },
            { label: 'Normal 1', value: 'normal-1' },
            { label: 'Normal 2', value: 'normal-2' },
            { label: 'Original New', value: 'original-new' },
            { label: 'Original Old', value: 'original-old' },
            { label: 'Rule34', value: 'rule34' },
            { label: 'Shimmie2', value: 'shimmie2' },
            { label: 'Sketch 1', value: 'sketch-1' },
            { label: 'Sketch 2', value: 'sketch-2' },
            { label: 'Yousa Ling', value: 'yousa-ling' },
          ],
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.views.getloli.padding',
        label: 'Length',
        props: {
          type: 'number',
          max: 16,
          min: 1,
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.views.getloli.offset',
        label: 'Offset',
        props: {
          type: 'number',
          max: 500,
          min: -500,
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.views.getloli.scale',
        label: 'Scale',
        props: {
          type: 'number',
          max: 2,
          min: 0.1,
          step: 0.1,
        },
      },
      {
        type: Inputs.SELECT,
        path: 'content.views.getloli.align',
        label: 'Align',
        props: {
          options: [
            {
              label: 'Top',
              value: 'top',
            },
            {
              label: 'Bottom',
              value: 'bottom',
            },
            {
              label: 'Center',
              value: 'center',
            },
          ],
        },
      },
      {
        type: Inputs.SELECT,
        path: 'content.views.getloli.pixelated',
        label: 'Pixelated',
        props: {
          options: [
            {
              label: 'Yes',
              value: '1',
            },
            {
              label: 'No',
              value: '0',
            },
          ],
        },
      },
      {
        type: Inputs.SELECT,
        path: 'content.views.getloli.darkmode',
        label: 'Dark Mode',
        props: {
          options: [
            {
              label: 'Auto',
              value: 'auto',
            },
            {
              label: 'Yes',
              value: '1',
            },
            {
              label: 'No',
              value: '0',
            },
          ],
        },
      },
    ],
    conditions: {
      path: 'props.content.provider',
      be: 'equal',
      value: 'getloli',
    },
  },
];

export { groups };
