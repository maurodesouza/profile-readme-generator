import { GroupFields } from 'components';

import { groups } from './fields';
import * as S from './styles';

const PacmanPanel = () => {
  return (
    <S.Container>
      {' '}
      <S.Container>
        {groups.map(group => (
          <GroupFields key={group.id} {...group} />
        ))}
      </S.Container>
    </S.Container>
  );
};

export { PacmanPanel };
