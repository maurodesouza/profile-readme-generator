import { AnimateSharedLayout } from 'framer-motion';
import { StyledIcon } from '@styled-icons/styled-icon';

import * as S from './styles';

type Tab = {
  icon: StyledIcon;
  label: string;
  view: string;
};

type PrePlayerTabsProps = {
  tabs: Tab[];
  currentTab: string;
  setCurrentTab: (tab: any) => void;
};

const Tabs = ({ tabs, currentTab, setCurrentTab }: PrePlayerTabsProps) => {
  return (
    <S.Container>
      <AnimateSharedLayout>
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
                  <Icon size={20} />

                  <S.Label>{label}</S.Label>
                </S.Wrapper>

                {active ? <S.Underline layoutId="underline" /> : null}
              </S.Tab>
            );
          })}
        </S.Tabs>
      </AnimateSharedLayout>
    </S.Container>
  );
};

export { Tabs };
