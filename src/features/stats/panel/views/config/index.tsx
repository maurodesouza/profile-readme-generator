import { useMemo, useState } from 'react';

import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

import { Fields } from 'components/ui/primitives/fields';

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
      <Fields.Compound.Combobox
        label="Select the stats to config"
        defaultValue={currentTab}
        onChange={option => setCurrentTab(option.value)}
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
