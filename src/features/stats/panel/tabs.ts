import { views } from './views';
import { IconName } from 'lucide-react/dynamic';

type Tab = {
  icon: IconName;
  label: string;
  view: keyof typeof views;
};

const tabs: Tab[] = [
  {
    label: 'Layout',
    icon: 'layout',
    view: 'layout',
  },
  {
    label: 'Config Stats',
    icon: 'settings',
    view: 'config',
  },
];

export { tabs, views };
