import { AnimatePresence } from 'framer-motion';
import { StyledIcon } from '@styled-icons/styled-icon';

import * as S from './styles';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type Tab = {
  icon?: StyledIcon;
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
          {tabs.map(({ label, icon: Icon, view }) => {
            const active = view === currentTab;

            return (
              <S.Tab
                key={view}
                isActive={view === currentTab}
                onClick={() => setCurrentTab(view)}
              >
                <S.Wrapper>
                  {Icon && <Icon size={20} />}

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
