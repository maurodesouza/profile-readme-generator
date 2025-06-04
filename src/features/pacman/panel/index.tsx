import { GroupFields } from 'components';

import { groups } from './fields';

export function PacmanPanel() {
  return (
    <div>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </div>
  );
}
