import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';

import { TechIconVariants, TechIconVariantsRef } from 'components';
import { useCanvas } from 'hooks';

import { getDeepObjectProperty } from 'utils';

import { variants } from './animations';
import * as S from './styles';

type Tech = {
  icon: string;
};

type Techs = {
  [key: string]: Tech;
};

const Editing = () => {
  const techIconVariantsRefs = useRef<TechIconVariantsRef[]>([]);
  const { currentSection } = useCanvas();

  const selectedTechs = getDeepObjectProperty<Techs>(
    currentSection,
    'props.content.techs'
  );

  return (
    <S.Container
      initial="closed"
      animate="open"
      variants={variants.container}
      layout
    >
      <AnimatePresence>
        {Object.entries(selectedTechs).map(([tech, { icon }], index) => (
          <TechIconVariants
            key={tech}
            ref={ref => (techIconVariantsRefs.current[index] = ref!)}
            refs={techIconVariantsRefs.current}
            tech={tech}
            icon={icon}
          />
        ))}
      </AnimatePresence>
    </S.Container>
  );
};

export { Editing };
