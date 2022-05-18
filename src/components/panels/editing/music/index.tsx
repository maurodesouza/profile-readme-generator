import { GroupFields } from 'components';
import { getDeepObjectProperty } from 'utils';

import { useCanvas } from 'hooks';
import { views } from './views';

import { groups } from './fields';
import * as S from './styles';

type Views = keyof typeof views;

const MusicEditPanel = () => {
  const { currentSection: obj } = useCanvas();

  const currentView = getDeepObjectProperty<Views>(obj, 'props.content.type');

  const View = views[currentView];

  return (
    <S.Container>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}

      <View />
    </S.Container>
  );
};

export { MusicEditPanel };
