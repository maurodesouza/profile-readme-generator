import { AnimatePresence } from 'framer-motion';
import { IconName } from 'lucide-react/dynamic';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Icon } from 'components/ui/primitives/atoms/icon';
import * as S from './styles';

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
    <S.Container>
      <AnimatePresence>
        <S.Tabs>
          {tabs.map(({ label, icon, view }) => {
            const active = view === currentTab;

            return (
              <S.Tab
                key={view}
                isActive={view === currentTab}
                onClick={() => setCurrentTab(view)}
              >
                <S.Wrapper>
                  {icon && <Icon name={icon} size={20} />}

                  <S.Label>{label}</S.Label>
                </S.Wrapper>

                {active ? <S.Underline layoutId="underline" /> : null}
              </S.Tab>
            );
          })}
        </S.Tabs>
      </AnimatePresence>
    </S.Container>
  );
};

export { Tabs };
