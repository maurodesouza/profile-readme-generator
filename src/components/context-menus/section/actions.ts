import { events } from '@events/base';
import { Trash, Edit2 } from '@styled-icons/feather';

const actions = [
  {
    label: 'Deletar',
    icon: Trash,
    action: events.canvas.remove,
    variant: 'danger',
  },
  {
    label: 'Editar',
    icon: Edit2,
    action: events.canvas.currentSection,
  },
];

export { actions };
