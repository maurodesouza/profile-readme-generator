import React, { useEffect, useState } from 'react';
import Router from 'next/router';

import { Tabs } from '#/components/atoms/tabs';
import { Panel } from '#/components/organisms/panel';

import { tabs, views } from './tabs';

type Views = keyof typeof views;

export function StatsEditPanel() {
  const [currentTab, setCurrentTab] = useState<Views>('layout');

  const View = views[currentTab] ?? React.Fragment;

  useEffect(() => {
    return () => {
      const query = new URLSearchParams(window.location.search);

      query.delete('tab');
      query.delete('config-view');

      Router.replace(
        {
          pathname: window.location.pathname,
          query: query.toString(),
        },
        undefined,
        {
          shallow: true,
        }
      );
    };
  }, []);

  return (
    <>
      <Tabs tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab} />

      <Panel.Scrollable>
        <View />
      </Panel.Scrollable>
    </>
  );
}
