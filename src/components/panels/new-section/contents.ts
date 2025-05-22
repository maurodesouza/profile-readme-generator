import { events } from 'app';
import { PanelsEnum } from 'types';

const contents = [
  {
    icon: 'file-text',
    onClick: () => events.panel.open('right', PanelsEnum.TEMPLATES),
    name: 'Templates',
  },
  {
    icon: 'zap',
    onClick: () => events.panel.open('right', PanelsEnum.RECOMMENDED_RESOURCES),
    name: 'Level Up',
  },
];

export { contents };
