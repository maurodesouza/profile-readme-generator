import { StyledIcon } from '@styled-icons/styled-icon';
import { Activity, BarChart2, TrendingUp } from '@styled-icons/feather';

import { views } from './views';

type Tab = {
  icon: StyledIcon;
  label: string;
  view: keyof typeof views;
};

const tabs: Tab[] = [
  {
    label: 'Stats',
    icon: Activity,
    view: 'stats',
  },
  {
    label: 'Langs',
    icon: BarChart2,
    view: 'languages',
  },
  {
    label: 'Streak',
    icon: TrendingUp,
    view: 'streak',
  },
];

export { tabs, views };
