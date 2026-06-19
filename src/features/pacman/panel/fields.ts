import { Inputs } from 'types';

const groups = [
  {
    id: 1,
    label: '',
    fields: [
      {
        type: Inputs.SELECT,
        path: 'game',
        label: 'Game',
        props: {
          options: [
            {
              label: '👻 Pac-Man',
              value: 'pacman',
            },
            {
              label: '🧱 Breakout',
              value: 'breakout',
            },
            {
              label: '🚀 Galaga',
              value: 'galaga',
            },
            {
              label: '🫧 Puzzle Bobble',
              value: 'puzzle-bobble',
            },
            {
              label: '💣 Bomberman',
              value: 'bomberman',
            },
          ],
        },
      },
      {
        type: Inputs.SWITCH,
        path: 'styles.clear',
        label: 'Clear float',
      },
    ],
  },
];

export { groups };
