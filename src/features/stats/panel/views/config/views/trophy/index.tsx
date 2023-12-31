import { GroupFields } from 'components';
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
