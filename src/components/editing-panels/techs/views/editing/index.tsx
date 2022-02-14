import { useRef } from 'react';
import { AnimatePresence, Reorder } from 'framer-motion';

import { TechIconVariants, TechIconVariantsRef } from 'components';
import { useCanvas, useForceUpdate } from 'hooks';

import { getDeepObjectProperty } from 'utils';

import { variants } from './animations';
import * as S from './styles';
import { events } from '@events/base';

type Tech = {
  icon: string;
};

type Techs = {
  [key: string]: Tech;
};

const Editing = () => {
  const techIconVariantsRefs = useRef<TechIconVariantsRef[]>([]);

  const forceUpdate = useForceUpdate();
  const { currentSection } = useCanvas();

  const selectedTechs = getDeepObjectProperty<Techs>(
    currentSection,
    'props.content.techs'
  );

  const techs = Object.entries(selectedTechs);
  const techs_names = techs.map(tech => tech[0]);

  const handleOnReOrder = (order: typeof techs_names) => {
    const path = 'content.techs';

    const value = order.reduce((obj, name) => {
      const finded = techs.find(tech => tech[0] === name)!;

      obj[finded[0]] = finded[1];

      return obj;
    }, {} as Techs);

    events.canvas.edit({ path, value });
    setTimeout(forceUpdate, 200);
  };

  return (
    <S.Container
      initial="closed"
      animate="open"
      variants={variants.container}
      layoutScroll
    >
      <AnimatePresence>
        <Reorder.Group
          axis="y"
          values={techs_names}
          onReorder={handleOnReOrder}
        >
          {techs.map(([tech, { icon }], index) => (
            <TechIconVariants
              key={tech}
              ref={ref => (techIconVariantsRefs.current[index] = ref!)}
              refs={techIconVariantsRefs.current}
              tech={tech}
              icon={icon}
            />
          ))}
        </Reorder.Group>
      </AnimatePresence>
    </S.Container>
  );
};

export { Editing };
