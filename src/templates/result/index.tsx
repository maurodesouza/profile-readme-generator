import { useEffect } from 'react';

import { events } from 'app';
import { ReadmeResult, Sticky, Panel, BuildingModile } from 'components';

import { PanelsEnum } from 'types';
import * as S from './styles';

const ResultTemplate = () => {
  useEffect(() => {
    events.panel.open('left', PanelsEnum.GENERATED_FILES);
  }, []);

  return (
    <BuildingModile>
      <S.Container>
        <Panel side="left" />

        <Sticky>
          <S.Wrapper>
            <ReadmeResult />
          </S.Wrapper>
        </Sticky>

        <div />
      </S.Container>
    </BuildingModile>
  );
};

export { ResultTemplate };
