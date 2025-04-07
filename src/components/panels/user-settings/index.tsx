import { GroupFields } from 'components';

import { groups } from './fields';
import * as S from './styles';

const PanelUserSettings = () => {
  return (
    <S.Container>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} context="settings" />
      ))}
    </S.Container>
  );
};

export { PanelUserSettings };
