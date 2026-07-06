import { GroupFields } from '#/components/organisms/group-fields';
import { groups } from './fields';

const Trophy = () => {
  return (
    <>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </>
  );
};

export { Trophy };
