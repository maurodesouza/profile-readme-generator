import { GroupFields } from '#/components/organisms/group-fields';
import { groups } from './fields';

const Languages = () => {
  return (
    <>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </>
  );
};

export { Languages };
