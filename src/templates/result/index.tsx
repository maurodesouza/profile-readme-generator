import { useEffect } from 'react';

import { events } from 'app';
import { ReadmeResult, Panel, BuildingModile } from 'components';

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

        <S.Wrapper>
          <ReadmeResult />
        </S.Wrapper>

        <div />
      </S.Container>
    </BuildingModile>
  );
};

export { ResultTemplate };
