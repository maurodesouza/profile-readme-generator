import { ReadmeResult, Sticky, PanelGeneratedFiles } from 'components';
import * as S from './styles';

const ResultTemplate = () => {
  return (
    <S.Container>
      <PanelGeneratedFiles />

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
