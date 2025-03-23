import { FileText, Zap } from '@styled-icons/feather';

import { events } from 'app';
import { PanelsEnum } from 'types';

const contents = [
  {
    icon: FileText,
    onClick: () => events.panel.open('right', PanelsEnum.TEMPLATES),
    name: 'Templates',
  },
  {
    icon: Zap,
    onClick: () => events.panel.open('right', PanelsEnum.RECOMMENDED_RESOURCES),
    name: 'Level Up',
  },
];

export { contents };
