import { GroupFields } from 'components';

import { groups } from './fields';

export function TextEditPanel() {
  return (
    <div>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </div>
  );
}
