import { actions } from '#/lib/command';
import { PanelsEnum } from '#/types';

const contents = [
  {
    icon: 'star',
    name: 'Star This Project',

    href: 'https://github.com/maurodesouza/profile-readme-generator',
    target: '_blank',
    rel: 'noreferrer',
    className: 'text-inherit! palette-warning',
  },
  {
    icon: 'git-fork',
    name: 'Fork on Github',

    href: 'https://github.com/maurodesouza/profile-readme-generator/fork',
    target: '_blank',
    rel: 'noreferrer',
    className: 'text-inherit! palette-warning',
  },

  {
    icon: 'zap',
    name: 'Level Up',

    onClick: () => actions.panel.right.show(PanelsEnum.RECOMMENDED_RESOURCES),
    className: 'palette-green',
  },

  {
    icon: 'file-text',
    name: 'Templates',

    onClick: () => actions.panel.right.show(PanelsEnum.TEMPLATES),
    className: 'palette-green',
  },
];

export { contents };
