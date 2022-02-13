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
    label: 'Adicionar',
    icon: Plus,
    view: 'adding',
  },
  {
    label: 'Editar',
    icon: Edit2,
    view: 'editing',
  },
];

export { tabs, views };
