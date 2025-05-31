import { IconName } from 'lucide-react/dynamic';

import { actions } from './actions';

import { Icon } from 'components/ui/primitives/atoms/icon';
import { ContextMenu } from 'components/ui/primitives/atoms/context-menu';

type SectionContextMenuProps = {
  id: string;
};

export function SectionContextMenu(props: SectionContextMenuProps) {
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
    </ContextMenu.Content>
  );
}
