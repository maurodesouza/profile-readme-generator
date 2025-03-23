import { useEffect } from 'react';

import { Canvas, Footer, Panel } from 'components';

import { api } from 'services';
import { PanelsEnum } from 'types';

import * as S from './styles';

const CanvasTemplate = () => {
  useEffect(() => {
    api.put('visits');
  }, []);

  return (
    <S.Container>
      <Panel initialPanel={PanelsEnum.NEW_SECTION} side="left" />

      <S.Wrapper>
        <Canvas />
        <Footer />
      </S.Wrapper>

      <Panel initialPanel={PanelsEnum.RECOMMENDED_RESOURCES} side="right" />
    </S.Container>
  );
};

export { CanvasTemplate };
