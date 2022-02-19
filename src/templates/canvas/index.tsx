import { Canvas, PanelNewSection, PanelEditSection, Sticky } from 'components';

import * as S from './styles';

const CanvasTemplate = () => {
  return (
    <S.Container>
      <PanelNewSection />
      <Sticky>
        <S.Wrapper>
          <Canvas />
        </S.Wrapper>
      </Sticky>
      <PanelEditSection />
    </S.Container>
  );
};

export { CanvasTemplate };
