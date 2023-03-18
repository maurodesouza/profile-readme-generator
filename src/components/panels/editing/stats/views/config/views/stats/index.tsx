import { GroupFields } from 'components';
import { groups } from './fields';

const Stats = () => {
  return (
    <>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </>
  );
};

export { Stats };
