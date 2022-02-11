import { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import { inputMap, Tabs } from 'components';

import { tabs, views } from './tabs';
import { fields } from './fields';

import * as S from './styles';

type Views = keyof typeof views;

const StatsEditPanel = () => {
  const [currentTab, setCurrentTab] = useState<Views>('stats');

  const View = views[currentTab];

  return (
    <S.Container>
      <S.Fields>
        {fields.map(field => {
          const Input = inputMap[field.type];

          return (
            <S.Field key={field.path}>
              <Input label={field.label} path={field.path} {...field.props} />
            </S.Field>
          );
        })}
      </S.Fields>

      <Tabs tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab} />

      <S.Content>
        <AnimateSharedLayout>
          <View />
        </AnimateSharedLayout>
      </S.Content>
    </S.Container>
  );
};

export { StatsEditPanel };
