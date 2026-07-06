import { GroupFields } from '#/components/organisms/group-fields';

import { groups } from './fields';
import { Panel } from '#/components/organisms/panel';

export function BorderEditPanel() {
  return (
    <Panel.Scrollable>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </Panel.Scrollable>
  );
}
