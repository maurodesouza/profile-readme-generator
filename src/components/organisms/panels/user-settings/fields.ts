import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    fields: [
      {
        type: Inputs.TEXT,
        path: 'user.github',
        label: 'Github username',
      },
    ],
  },
];

export { groups };
