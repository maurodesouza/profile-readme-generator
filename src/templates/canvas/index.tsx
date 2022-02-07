import { Canvas, PanelNewBlock, PanelEditBlock } from 'components';

import * as S from './styles';

const CanvasTemplate = () => {
  return (
    <S.Container>
      <PanelNewBlock />
      <Canvas />
      <PanelEditBlock />
    </S.Container>
  );
};

export { CanvasTemplate };
