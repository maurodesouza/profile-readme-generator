import {
  Canvas,
  PanelNewBlock,
  PanelEditBlock,
  RenderOnlyClientSide,
} from 'components';

import * as S from './styles';

const CanvasTemplate = () => {
  return (
    <S.Container>
      <RenderOnlyClientSide>
        <PanelNewBlock />
        <Canvas />
        <PanelEditBlock />
      </RenderOnlyClientSide>
    </S.Container>
  );
};

export { CanvasTemplate };
