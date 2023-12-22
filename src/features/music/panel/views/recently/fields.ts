import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    fields: [
      {
        type: Inputs.TEXT,
        path: 'content.recently.user',
        label: 'Spotify username',
      },
      {
        type: Inputs.TEXT,
        path: 'content.recently.count',
        label: 'Limit',
        props: {
          type: 'number',
          min: 0,
          max: 10,
          placeholder: '(max 10)',
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'content.recently.unique',
        label: 'Unique tracks',
      },
    ],
  },
];
export { groups };
