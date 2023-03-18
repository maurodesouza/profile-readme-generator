import { AnimatePresence, Reorder } from 'framer-motion';
import { GroupFields } from 'components';

import { useCanvas, useForceUpdate } from 'hooks';
import { getDeepObjectProperty } from 'utils';

import { events } from 'app';
import { Item } from './item';

import { groups } from './fields';
import * as S from './styles';

type Stats = {
  [key: string]: Stats;
};

const Layout = () => {
  const forceUpdate = useForceUpdate();
  const { currentSection } = useCanvas();

  const selectedStats = getDeepObjectProperty<Stats>(
    currentSection,
    'props.content.graphs'
  );

  const stats = Object.entries(selectedStats);
  const stats_types = stats.map(tech => tech[0]);

  const handleOnReOrder = (order: typeof stats_types) => {
    const path = 'content.graphs';

    const value = order.reduce((obj, name) => {
      const finded = stats.find(stat => stat[0] === name)!;

      obj[finded[0]] = finded[1];

      return obj;
    }, {} as Stats);

    events.canvas.edit({ path, value });
    setTimeout(forceUpdate, 200);
  };

  return (
    <S.Container>
      {groups.map(group => (
        <GroupFields key={group.id} {...group} />
      ))}

      <AnimatePresence>
        <Reorder.Group
          axis="y"
          values={stats_types}
          onReorder={handleOnReOrder}
        >
          {stats.map(([stats, props]) => (
            <Item key={stats} stats={stats} isShowing={!!props.show} />
          ))}
        </Reorder.Group>
      </AnimatePresence>
    </S.Container>
  );
};

export { Layout };
