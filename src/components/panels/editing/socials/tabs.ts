import { StyledIcon } from '@styled-icons/styled-icon';
import { Plus, Edit2 } from '@styled-icons/feather';

import { views } from './views';

type Tab = {
  icon: StyledIcon;
  label: string;
  view: keyof typeof views;
};

const tabs: Tab[] = [
  {
    label: 'Add',
    icon: Plus,
    view: 'adding',
  },
  {
    label: 'Edit',
    icon: Edit2,
    view: 'editing',
  },
];

export { tabs, views };
