import { actions as commandActions } from 'lib/command';

const actions = [
  {
    label: 'Duplicate',
    icon: 'copy',
    action: commandActions.canvas.section.duplicate,
  },
  {
    label: 'Edit',
    icon: 'edit-2',
    action: commandActions.canvas.section.activate,
  },
  {
    label: 'Delete',
    icon: 'trash',
    action: commandActions.canvas.section.remove,
    tone: 'danger',
  },
] as const;

export { actions };
