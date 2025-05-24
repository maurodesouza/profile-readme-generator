import { useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

import { Select } from 'components';
import { views } from './views';

import { capitalize } from 'utils';

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

      <div className="flex flex-col mt-md">
        <AnimatePresence>
          <View />
        </AnimatePresence>
      </div>
    </>
  );
};

export { Config };
