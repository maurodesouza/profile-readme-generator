import { GroupFields } from '#/components/organisms/group-fields';
import { groups } from './fields';

const Streak = () => {
  return (
    <>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </>
  );
};

export { Streak };
