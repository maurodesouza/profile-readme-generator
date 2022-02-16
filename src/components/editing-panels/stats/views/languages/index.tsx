import { GroupFields } from 'components';
import { Container } from '../@base';

import { groups } from './fields';

const Languages = () => {
  return (
    <Container>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </Container>
  );
};

export { Languages };
