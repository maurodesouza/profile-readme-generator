import { events } from 'app';
import { PanelsEnum } from 'types';

const contents = [
  {
    icon: 'file-text',
    onClick: () => events.panel.show('right', PanelsEnum.TEMPLATES),
    name: 'Templates',
  },
  {
    icon: 'zap',
    onClick: () => events.panel.show('right', PanelsEnum.RECOMMENDED_RESOURCES),
    name: 'Level Up',
  },
];

export { contents };
