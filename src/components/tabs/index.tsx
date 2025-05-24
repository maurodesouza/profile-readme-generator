import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { IconName } from 'lucide-react/dynamic';
import { AnimatePresence, motion } from 'framer-motion';

import { Icon } from 'components/ui/primitives/atoms/icon';
import { Text } from 'components/ui/primitives/atoms/text';

import { cn } from 'utils';

type Tab = {
  icon?: IconName;
  label: string;
  view: string;
};

type PrePlayerTabsProps = {
  id?: string;
  tabs: Tab[];
  currentTab: string;
  setCurrentTab: (tab: any) => void;
};

const Tabs = ({
  id = 'tab',
  tabs,
  currentTab,
  setCurrentTab,
}: PrePlayerTabsProps) => {
  const router = useRouter();
  const hasMatchWithSomeTab = (view: string) =>
    tabs.some(tab => tab.view === view);

  useEffect(() => {
    const { [id]: view } = router.query;

    if (hasMatchWithSomeTab(view as string)) setCurrentTab(view);
  }, [router]);

  return (
    <div className="w-full mb-md">
      <AnimatePresence>
        <div className="flex items-end justify-between w-full border-b border-ring-inner">
          {tabs.map(({ label, icon, view }) => {
            const isActive = view === currentTab;
            const classes = isActive
              ? '!text-tone-foreground-context'
              : '!text-foreground';

            return (
              <button
                className={cn('relative flex flex-col flex-1 px-sm', classes)}
                key={view}
                onClick={() => setCurrentTab(view)}
              >
                <div className="flex items-center self-center gap-xs mb-md">
                  {icon && <Icon name={icon} size={20} />}

                  <Text.Paragraph className="text-inherit">
                    {label}
                  </Text.Paragraph>
                </div>

                {isActive ? (
                  <motion.div
                    className="absolute left-0 right-0 bottom-[-2px] w-full h-1 rounded-full bg-tone-luminosity-300"
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
};

export { Tabs };
