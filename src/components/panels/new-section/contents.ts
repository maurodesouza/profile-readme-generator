import { events } from '@events';
import { PanelsEnum } from 'types';

const contents = [
  {
    icon: 'star',
    name: 'Star This Project',

    href: 'https://github.com/maurodesouza/profile-readme-generator',
    target: '_blank',
    rel: 'noreferrer',
    className: '!text-inherit tone palette-warning',
  },
  {
    icon: 'git-fork',
    name: 'Fork on Github',

    href: 'https://github.com/maurodesouza/profile-readme-generator/fork',
    target: '_blank',
    rel: 'noreferrer',
    className: '!text-inherit tone palette-warning',
  },

  {
    icon: 'zap',
    name: 'Level Up',

    onClick: () => events.panel.show('right', PanelsEnum.RECOMMENDED_RESOURCES),
    className: 'tone palette-success',
  },

  {
    icon: 'file-text',
    name: 'Templates',

    onClick: () => events.panel.show('right', PanelsEnum.TEMPLATES),
    className: 'tone palette-success',
  },
];

export { contents };
