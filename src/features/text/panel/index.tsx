import { GroupFields } from 'components';

import { groups } from './fields';
import * as S from './styles';

const TextEditPanel = () => {
  return (
    <S.Container>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}
    </S.Container>
  );
};

export { TextEditPanel };
