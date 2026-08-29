import { actions as commandActions } from '#/lib/command';

type Action = {
  label: string;
  icon: string;
  action: (id: string) => void;
  className?: string;
};

const actions: Action[] = [
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
    className: 'palette-danger',
  },
];

export { actions };
