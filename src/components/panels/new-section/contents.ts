import { FileText, Zap } from '@styled-icons/feather';

import { events } from 'app';
import { PanelsEnum } from 'types';

const contents = [
  {
    icon: FileText,
    onClick: () => events.panel.show('right', PanelsEnum.TEMPLATES),
    name: 'Templates',
  },
  {
    icon: Zap,
    onClick: () => events.panel.show('right', PanelsEnum.RECOMMENDED_RESOURCES),
    name: 'Level Up',
  },
];

export { contents };
