'use client';

import { tailwind } from '#/utils/tailwind';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { IconName } from 'lucide-react/dynamic';
import { AnimatePresence, motion } from 'framer-motion';

import { Icon } from '#/components/atoms/icon';
import { Text } from '#/components/atoms/text';
import { useTranslateField } from '#/hooks';

export type Tab = {
  icon?: IconName;
  label: string;
  view: string;
};

type PrePlayerTabsProps = {
  id?: string;
  tabs: Tab[];
  currentTab: string;
  setCurrentTab: (tab: string) => void;
};

export function Tabs(props: PrePlayerTabsProps) {
  const { id = 'tab', tabs, currentTab, setCurrentTab } = props;

  const translate = useTranslateField();

  const searchParams = useSearchParams();

  function hasMatchWithSomeTab(view: string) {
    return tabs.some(tab => tab.view === view);
  }

  useEffect(() => {
    const view = searchParams.get(id);

    if (view && hasMatchWithSomeTab(view)) setCurrentTab(view);
  }, [searchParams, id]);

  return (
    <div className="w-full mb-md">
      <AnimatePresence>
        <div className="flex items-end justify-between w-full border-b border-palette-line">
          {tabs.map(({ label, icon, view }) => {
            const isActive = view === currentTab;
            const classes = isActive
              ? 'text-palette-ring!'
              : 'text-palette-contrast!';

            return (
              <button
                className={tailwind.cn(
                  'relative flex flex-col flex-1 px-sm',
                  classes
                )}
                key={view}
                onClick={() => setCurrentTab(view)}
              >
                <div className="flex items-center self-center gap-xs mb-md">
                  {icon && <Icon name={icon} size={20} />}

                  <Text.Paragraph className="text-inherit">
                    {translate(label)}
                  </Text.Paragraph>
                </div>

                {isActive ? (
                  <motion.div
                    className="absolute left-0 right-0 -bottom-0.5 w-full h-1 rounded-full bg-palette-ring"
                    layoutId="underline"
                  />
                ) : null}
              </button>
            );
          })}
        </div>
      </AnimatePresence>
    </div>
  );
}
