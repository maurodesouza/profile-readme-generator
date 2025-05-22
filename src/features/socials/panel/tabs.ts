import { views } from './views';
import { IconName } from 'lucide-react/dynamic';

type Tab = {
  icon: IconName;
  label: string;
  view: keyof typeof views;
};

const tabs: Tab[] = [
  {
    label: 'Add',
    icon: 'plus',
    view: 'adding',
  },
  {
    label: 'Edit',
    icon: 'edit-2',
    view: 'editing',
  },
];

export { tabs, views };
