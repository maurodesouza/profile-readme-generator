import { ReadmeResult, Panel } from 'components';

import { PanelsEnum } from 'types';
import * as S from './styles';

const ResultTemplate = () => {
  return (
    <S.Container>
      <Panel initialPanel={PanelsEnum.GENERATED_FILES} side="left" />

      <S.Wrapper>
        <ReadmeResult />
      </S.Wrapper>

      <Panel initialPanel={PanelsEnum.RECOMMENDED_RESOURCES} side="right" />
    </S.Container>
  );
};

export { ResultTemplate };
