import { GroupFields } from 'components';
import { Container } from '../@base';

import { groups } from './fields';

const Stats = () => {
  return (
    <Container>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </Container>
  );
};

export { Stats };
