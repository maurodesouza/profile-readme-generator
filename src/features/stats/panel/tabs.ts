import { StyledIcon } from '@styled-icons/styled-icon';
import { Layout, Settings } from '@styled-icons/feather';

import { views } from './views';

type Tab = {
  icon: StyledIcon;
  label: string;
  view: keyof typeof views;
};

const tabs: Tab[] = [
  {
    label: 'Layout',
    icon: Layout,
    view: 'layout',
  },
  {
    label: 'Config Stats',
    icon: Settings,
    view: 'config',
  },
];

export { tabs, views };
