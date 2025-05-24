import { useState } from 'react';

import { Tabs } from 'components/ui/primitives/atoms/tabs';

import { tabs, views } from './tabs';
import * as S from './styles';

type Views = keyof typeof views;

const TechsEditPanel = () => {
  const [currentTab, setCurrentTab] = useState<Views>('adding');

  const View = views[currentTab];

  return (
    <S.Container>
      <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <View />
    </S.Container>
  );
};

export { TechsEditPanel };
