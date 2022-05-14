import { ReadmeResult, Sticky, Panel } from 'components';
import * as S from './styles';

const ResultTemplate = () => {
  return (
    <S.Container>
      <Panel side="left" />

      <Sticky>
        <S.Wrapper>
          <ReadmeResult />
        </S.Wrapper>
      </Sticky>

      <div></div>
    </S.Container>
  );
};

export { ResultTemplate };
