import { useEffect } from 'react';

import { events } from 'app';
import { Canvas, Footer, Panel, Sticky, BuildingModile } from 'components';

import { api } from 'services';
import { PanelsEnum } from 'types';

import * as S from './styles';

const CanvasTemplate = () => {
  useEffect(() => {
    api.put('visits');

    events.panel.open('right', PanelsEnum.TEMPLATES);
    events.panel.open('left', PanelsEnum.NEW_SECTION);
  }, []);

  return (
    <BuildingModile>
      <S.Container>
        <Panel side="left" />

        <Sticky>
          <S.Wrapper>
            <Canvas />
            <Footer />
          </S.Wrapper>
        </Sticky>

        <Panel side="right" />
      </S.Container>
    </BuildingModile>
  );
};

export { CanvasTemplate };
