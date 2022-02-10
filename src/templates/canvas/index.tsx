import {
  Canvas,
  PanelNewSection,
  PanelEditSection,
  RenderOnlyClientSide,
} from 'components';

import * as S from './styles';

const CanvasTemplate = () => {
  return (
    <S.Container>
      <RenderOnlyClientSide>
        <PanelNewSection />
        <Canvas />
        <PanelEditSection />
      </RenderOnlyClientSide>
    </S.Container>
  );
};

export { CanvasTemplate };
