import { useState } from 'react';
import { Tabs } from 'components';

import { tabs, views } from './tabs';
import * as S from './styles';

type Views = keyof typeof views;

const SocialsEditPanel = () => {
  const [currentTab, setCurrentTab] = useState<Views>('adding');

  const View = views[currentTab];

  return (
    <S.Container>
      <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <View />
    </S.Container>
  );
};

export { SocialsEditPanel };
