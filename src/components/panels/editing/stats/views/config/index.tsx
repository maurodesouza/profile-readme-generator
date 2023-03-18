import { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import { Tabs } from 'components';
import { tabs, views } from './tabs';

import * as S from './styles';

type Views = keyof typeof views;

const Config = () => {
  const [currentTab, setCurrentTab] = useState<Views>('stats');

  const View = views[currentTab];

  return (
    <>
      <Tabs
        id="stats-tab"
        tabs={tabs}
        setCurrentTab={setCurrentTab}
        currentTab={currentTab}
      />

      <S.Content>
        <AnimateSharedLayout>
          <View />
        </AnimateSharedLayout>
      </S.Content>
    </>
  );
};

export { Config };
