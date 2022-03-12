import { ReadmeResult, Sticky } from 'components';
import * as S from './styles';

const ResultTemplate = () => {
  return (
    <S.Container>
      <div></div>

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
