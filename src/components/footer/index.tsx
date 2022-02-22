import { useCanvas } from 'hooks';
import { readmeGenerator } from 'generators';

import * as S from './styles';

const Footer = () => {
  const { sections } = useCanvas();

  return (
    <S.Container>
      <S.GenerateButton onClick={() => readmeGenerator(sections)}>
        Gerar README
      </S.GenerateButton>
    </S.Container>
  );
};

export { Footer };
