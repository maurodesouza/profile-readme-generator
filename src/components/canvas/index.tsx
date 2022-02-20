import { Reorder } from 'framer-motion';
import { sectionMap, BaseSection } from 'components';

import { useCanvas } from 'hooks';
import * as S from './styles';
import { events } from '@events/base';

const Canvas = () => {
  const { sections, currentSection } = useCanvas();

  const sectionIds = sections.map(section => section.id);

  return (
    <S.Container>
      <Reorder.Group
        axis="y"
        values={sectionIds}
        onReorder={events.canvas.reorder}
      >
        {sections.map(({ type, id, props }) => {
          const Section = sectionMap[type];

          return (
            <BaseSection key={id} id={id} selected={id === currentSection?.id}>
              <Section {...props} />
            </BaseSection>
          );
        })}
      </Reorder.Group>
    </S.Container>
  );
};

export { Canvas };
