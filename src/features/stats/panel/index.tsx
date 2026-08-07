'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import { Tabs } from '#/components/atoms/tabs';
import { Panel } from '#/components/organisms/panel';

import { tabs, views } from './tabs';

type Views = keyof typeof views;

export function StatsEditPanel() {
  const [currentTab, setCurrentTab] = useState<Views>('layout');

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const View = views[currentTab] ?? React.Fragment;

  useEffect(() => {
    return () => {
      const query = new URLSearchParams(searchParams.toString());

      query.delete('tab');
      query.delete('config-view');

      router.replace(`${pathname}?${query.toString()}`);
    };
  }, [pathname, router, searchParams]);

  return (
    <>
      <Tabs tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab} />

      <Panel.Scrollable>
        <View />
      </Panel.Scrollable>
    </>
  );
}
