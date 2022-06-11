import { events } from 'app';
import { Trash, Edit2, Copy } from '@styled-icons/feather';

const actions = [
  {
    label: 'Duplicate',
    icon: Copy,
    action: events.canvas.duplicate,
  },
  {
    label: 'Edit',
    icon: Edit2,
    action: events.canvas.currentSection,
  },
  {
    label: 'Delete',
    icon: Trash,
    action: events.canvas.remove,
    variant: 'danger',
  },
];

export { actions };
