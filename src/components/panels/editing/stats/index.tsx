import { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import { GroupFields, Tabs } from 'components';

import { tabs, views } from './tabs';
import { groups } from './fields';

import * as S from './styles';

type Views = keyof typeof views;

const StatsEditPanel = () => {
  const [currentTab, setCurrentTab] = useState<Views>('stats');

  const View = views[currentTab];

  return (
    <S.Container>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}

      <Tabs tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab} />

      <S.Content>
        <AnimateSharedLayout>
          <View />
        </AnimateSharedLayout>
      </S.Content>
    </S.Container>
  );
};

export { StatsEditPanel };
