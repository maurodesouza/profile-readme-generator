import { events } from '@events';

const actions = [
  {
    label: 'Duplicate',
    icon: 'copy',
    action: events.canvas.duplicate,
  },
  {
    label: 'Edit',
    icon: 'edit-2',
    action: events.canvas.currentSection,
  },
  {
    label: 'Delete',
    icon: 'trash',
    action: events.canvas.remove,
    tone: 'danger',
  },
] as const;

export { actions };
