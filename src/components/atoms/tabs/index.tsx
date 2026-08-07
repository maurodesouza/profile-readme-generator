'use client';

import { useTranslations } from 'next-intl';

import { tailwind } from '#/utils/tailwind';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { IconName } from 'lucide-react/dynamic';
import { AnimatePresence, motion } from 'framer-motion';

import { Icon } from '#/components/atoms/icon';
import { Text } from '#/components/atoms/text';

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

  const t = useTranslations('fields');
  const translate = (value: string) => {
    const slugKey = value
      .replace(/__dot__/g, '.')
      .replace(/\./g, '-dot-')
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
      .toLowerCase()
      .replace(/_/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]+/g, '-')
      .replace(/--+/g, '-')
      .replace(/^-|-$/g, '');

    return (t.has(slugKey) ? t(slugKey) : value) as string;
  };

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
        <div className="flex items-end justify-between w-full border-b border-ring-inner">
          {tabs.map(({ label, icon, view }) => {
            const isActive = view === currentTab;
            const classes = isActive
              ? 'text-tone-foreground-context!'
              : 'text-foreground!';

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
                    className="absolute left-0 right-0 -bottom-0.5 w-full h-1 rounded-full bg-tone-luminosity-300"
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
