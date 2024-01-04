import { GroupFields } from 'components';
import { groups } from './fields';

const ActivityGraph = () => {
  return (
    <>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </>
  );
};

export { ActivityGraph };
