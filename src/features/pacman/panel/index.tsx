import { GroupFields } from '#/components/organisms/group-fields';

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
