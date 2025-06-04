import { GroupFields } from 'components';

import { groups } from './fields';

export function ActivitiesEditPanel() {
  return (
    <div>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </div>
  );
}
