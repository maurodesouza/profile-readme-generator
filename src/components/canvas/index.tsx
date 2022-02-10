import { sectionMap, BaseSection } from 'components';

import { useCanvas } from 'hooks';
import * as S from './styles';

const Canvas = () => {
  const { sections } = useCanvas();

  return (
    <S.Container>
      {sections.map(({ type, id, props }) => {
        const Section = sectionMap[type];

        return (
          <BaseSection key={id} id={id} type={type}>
            <Section {...props} />
          </BaseSection>
        );
      })}
    </S.Container>
  );
};

export { Canvas };
