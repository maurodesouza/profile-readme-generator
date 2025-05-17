import { useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

import { Select } from 'components';
import { views } from './views';

import { capitalize } from 'utils';
import * as S from './styles';

type Views = keyof typeof views;

const Config = () => {
  const router = useRouter();
  const viewNames = useMemo(() => Object.keys(views), []);

  const view = router.query['config-view'] as string;
  const hasMatch = viewNames.includes(view);
  const initialView = hasMatch ? view : viewNames[0];

  const [currentTab, setCurrentTab] = useState(initialView);

  const View = views[currentTab as Views];

  return (
    <>
      <Select
        label="Select the stats to config"
        defaultValue={currentTab}
        onChange={setCurrentTab}
        options={viewNames.map(view => ({
          label: view.split('-').map(capitalize).join(' '),
          value: view,
        }))}
      />

      <S.Content>
        <AnimatePresence>
          <View />
        </AnimatePresence>
      </S.Content>
    </>
  );
};

export { Config };
