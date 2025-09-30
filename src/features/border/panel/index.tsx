import { GroupFields } from 'components';

import { groups } from './fields';
import { Panel } from 'components/ui/primitives/atoms/panel';

export function BorderEditPanel() {
  return (
    <Panel.Scrollable>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </Panel.Scrollable>
  );
}
