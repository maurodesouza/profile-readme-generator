import { IconName } from 'lucide-react/dynamic';

import { actions } from './actions';

import { Icon } from 'components/ui/primitives/atoms/icon';
import { ContextMenu } from 'components/ui/primitives/atoms/context-menu';

import { events } from '@events';
import { useCanvas } from 'hooks';

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
        onClick={() => events.canvas.up(props.id)}
        disabled={isFirst}
      >
        <Icon name="arrow-up" />
        Up
      </ContextMenu.Item>

      <ContextMenu.Item
        onClick={() => events.canvas.down(props.id)}
        disabled={isLast}
      >
        <Icon name="arrow-down" />
        Down
      </ContextMenu.Item>
    </ContextMenu.Content>
  );
}
