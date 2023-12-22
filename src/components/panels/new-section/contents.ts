import { FileText } from '@styled-icons/feather';

import { events } from 'app';
import { PanelsEnum } from 'types';

const contents = [
  {
    icon: FileText,
    onClick: () => events.panel.open('right', PanelsEnum.TEMPLATES),
    name: 'Templates',
  },
];

export { contents };
