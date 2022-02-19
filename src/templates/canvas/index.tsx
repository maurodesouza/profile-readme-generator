import { Canvas, PanelNewSection, PanelEditSection } from 'components';

import * as S from './styles';

const CanvasTemplate = () => {
  return (
    <S.Container>
      <PanelNewSection />
      <Canvas />
      <PanelEditSection />
    </S.Container>
  );
};

export { CanvasTemplate };
