import { IconName } from 'lucide-react/dynamic';

import { actions } from './actions';

import { Icon } from '#/components/atoms/icon';
import { ContextMenu } from '#/components/atoms/context-menu';

import { useCanvas } from 'hooks';
import { actions as commandActions } from 'lib/command';

type SectionContextMenuProps = {
  id: string;
};

export function SectionContextMenu(props: SectionContextMenuProps) {
  const { sections } = useCanvas();

  const sectionIndex = sections.findIndex(section => section.id === props.id);

  const isFirst = sectionIndex === 0;
  const isLast = sectionIndex + 1 === sections.length;

  return (
    <ContextMenu.Content>
      {actions.map(({ label, icon, action, ...rest }) => {
        return (
          <ContextMenu.Item
            key={label}
            onClick={() => action(props.id)}
            {...rest}
          >
            <Icon name={icon as IconName} />

            {label}
          </ContextMenu.Item>
        );
      })}

      <ContextMenu.Separator />
      <ContextMenu.Label>Move</ContextMenu.Label>
      <ContextMenu.Separator />

      <ContextMenu.Item
        onClick={() => commandActions.canvas.moveUp(props.id)}
        disabled={isFirst}
      >
        <Icon name="arrow-up" />
        Up
      </ContextMenu.Item>

      <ContextMenu.Item
        onClick={() => commandActions.canvas.moveDown(props.id)}
        disabled={isLast}
      >
        <Icon name="arrow-down" />
        Down
      </ContextMenu.Item>
    </ContextMenu.Content>
  );
}
