import { StyledIcon } from '@styled-icons/styled-icon';
import { PieChart, TrendingUp } from '@styled-icons/feather';

import { views } from './views';

type Tab = {
  icon: StyledIcon;
  label: string;
  view: keyof typeof views;
};

const tabs: Tab[] = [
  {
    label: 'Stats',
    icon: PieChart,
    view: 'stats',
  },
  {
    label: 'Languages',
    icon: TrendingUp,
    view: 'languages',
  },
];

export { tabs, views };
