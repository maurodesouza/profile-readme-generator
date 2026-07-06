import { GroupFields } from '#/components/organisms/group-fields';
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
