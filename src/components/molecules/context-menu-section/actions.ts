import { actions as commandActions } from 'lib/command';

const actions = [
  {
    label: 'Duplicate',
    icon: 'copy',
    action: commandActions.canvas.duplicate,
  },
  {
    label: 'Edit',
    icon: 'edit-2',
    action: commandActions.canvas.setCurrentSection,
  },
  {
    label: 'Delete',
    icon: 'trash',
    action: commandActions.canvas.remove,
    tone: 'danger',
  },
] as const;

export { actions };
