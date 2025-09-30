import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    label: 'Layout',
    fields: [
      {
        type: Inputs.SWITCH,
        path: 'styles.clear',
        label: 'Clear float',
      },
    ],
  },
  {
    id: 2,
    label: 'Shape',
    fields: [
      {
        type: Inputs.SELECT,
        path: 'content.borders.capsule-render.type',
        label: 'Type',
        props: {
          options: [
            { label: 'Wave', value: 'wave' },
            { label: 'Egg', value: 'egg' },
            { label: 'Shark', value: 'shark' },
            { label: 'Slice', value: 'slice' },
            { label: 'Rect', value: 'rect' },
            { label: 'Soft', value: 'soft' },
            { label: 'Rounded', value: 'rounded' },
            { label: 'Cylinder', value: 'cylinder' },
            { label: 'Waving', value: 'waving' },
            { label: 'Venom', value: 'venom' },
            { label: 'Speech', value: 'speech' },
            { label: 'Transparent', value: 'transparent' },
            { label: 'Blur', value: 'blur' },
          ],
        },
      },

      {
        type: Inputs.SELECT,
        path: 'content.borders.capsule-render.section',
        label: 'Section',
        props: {
          options: [
            { label: 'Header', value: 'header' },
            { label: 'Footer', value: 'footer' },
          ],
        },
      },

      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.height',
        label: 'Height',
        props: {
          type: 'number',
        },
      },

      {
        type: Inputs.SELECT,
        path: 'content.borders.capsule-render.color.type',
        label: 'Color Type',
        props: {
          options: [
            { label: 'Random Color', value: 'random' },
            { label: 'Random Gradient', value: 'gradient' },
            { label: 'Theme', value: 'theme' },
            { label: 'Static', value: 'static' },
            // { label: 'Gradient', value: 'custom-gradient' },
          ],
        },
      },

      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.color.static',
        label: 'Color',
        props: {
          placeholder: 'Hex color without # (e.g FFFFF)',
        },
        conditions: {
          path: 'props.content.borders.capsule-render.color.type',
          be: 'equal',
          value: 'static',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.color.custom-gradient',
        label: 'Gradient',
        props: {
          options: [
            { label: 'Random Color', value: 'random' },
            { label: 'Random Gradient', value: 'gradient' },

            { label: 'Static', value: 'static' },
            { label: 'Gradient', value: 'custom-gradient' },
          ],
        },
        conditions: {
          path: 'props.content.borders.capsule-render.color.type',
          be: 'equal',
          value: 'custom-gradient',
        },
      },

      {
        type: Inputs.SELECT,
        path: 'content.borders.capsule-render.color.theme',
        label: 'Theme',
        props: {
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Dark', value: 'dark' },
            { label: 'Radical', value: 'radical' },
            { label: 'Merko', value: 'merko' },
            { label: 'Gruvbox', value: 'gruvbox' },
            { label: 'Gruvbox Light', value: 'gruvbox_light' },
            { label: 'Tokyo Night', value: 'tokyonight' },
            { label: 'Onedark', value: 'onedark' },
            { label: 'Cobalt', value: 'cobalt' },
          ],
        },
        conditions: {
          path: 'props.content.borders.capsule-render.color.type',
          be: 'equal',
          value: 'theme',
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'content.borders.capsule-render.reversal',
        label: 'Reverse',
      },
    ],
  },
  {
    id: 3,
    columns: 2,
    label: 'Text',
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.text',
        label: 'Value',
        props: {
          column: '1 / 3',
        },
      },
      {
        type: Inputs.SELECT,
        path: 'content.borders.capsule-render.animation',
        label: 'Animation',
        props: {
          column: '1 / 3',
          options: [
            { label: 'None', value: '' },
            { label: 'FadeIn', value: 'fadeIn' },
            { label: 'ScaleIn', value: 'scaleIn' },
            { label: 'Blink', value: 'blink' },
            { label: 'Blinking', value: 'blinking' },
            { label: 'Twinkling', value: 'twinkling' },
          ],
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.fontSize',
        label: 'Font Size',
        props: {
          type: 'number',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.fontColor',
        label: 'Font Color',
        props: {
          placeholder: 'Hex color without # (e.g FFFFF)',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.fontAlign',
        label: 'Align X',
        props: {
          type: 'number',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.fontAlignY',
        label: 'Align Y',
        props: {
          type: 'number',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.stroke',
        label: 'Stroke Color',
        props: {
          placeholder: 'Hex color without # (e.g FFFFF)',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.strokeWidth',
        label: 'Stroke Width',
        props: {
          type: 'number',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.rotate',
        label: 'Rotate',
        props: {
          type: 'number',
          max: 360,
          min: -360,
          column: '1 / 3',
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'content.borders.capsule-render.textBg',
        label: 'Background',
      },
    ],
  },

  {
    id: 4,
    columns: 2,
    label: 'Description',
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.desc',
        label: 'Value',
        props: {
          column: '1 / 3',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.descSize',
        label: 'Font Size',
        props: {
          type: 'number',
          column: '1 / 3',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.descAlign',
        label: 'Align X',
        props: {
          type: 'number',
        },
      },
      {
        type: Inputs.TEXT,
        path: 'content.borders.capsule-render.descAlignY',
        label: 'Align Y',
        props: {
          type: 'number',
        },
      },
    ],
  },
];

export { groups };
