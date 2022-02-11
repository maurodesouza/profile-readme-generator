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
    label: 'Estatisticas',
    icon: PieChart,
    view: 'stats',
  },
  {
    label: 'Linguagens',
    icon: TrendingUp,
    view: 'languages',
  },
];

export { tabs, views };
