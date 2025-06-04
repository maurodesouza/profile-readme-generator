import { useState } from 'react';

import { Tabs } from 'components/ui/primitives/atoms/tabs';

import { tabs, views } from './tabs';

type Views = keyof typeof views;

export function TechsEditPanel() {
  const [currentTab, setCurrentTab] = useState<Views>('adding');

  const View = views[currentTab];

  return (
    <>
      <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <View />
    </>
  );
}
