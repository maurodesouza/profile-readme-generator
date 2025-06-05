import { events } from 'app';
import { PanelsEnum } from 'types';

const contents = [
  {
    icon: 'star',
    name: 'Start This Repo',

    href: 'https://github.com/maurodesouza/profile-readme-generator',
    target: '_blank',
    rel: 'noreferrer',
    className: '!text-inherit tone palette-warning',
  },
  {
    icon: 'git-fork',
    name: 'Fork This Repo',

    href: 'https://github.com/maurodesouza/profile-readme-generator/fork',
    target: '_blank',
    rel: 'noreferrer',
    className: '!text-inherit tone palette-warning',
  },
  {
    icon: 'file-text',
    name: 'Templates',
    onClick: () => events.panel.show('right', PanelsEnum.TEMPLATES),
  },
  {
    icon: 'zap',
    name: 'Level Up',
    onClick: () => events.panel.show('right', PanelsEnum.RECOMMENDED_RESOURCES),
  },
];

export { contents };
