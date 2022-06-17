import { GuardSection } from '../guard';

import * as S from './styles';

type SnakeSectionProps = {
  id: string;
};

const SnakeSection = ({ id }: SnakeSectionProps) => {
  return (
    <GuardSection sectionId={id}>
      <S.Container>
        <S.Image
          src="/assets/snake.svg"
          alt="An animation of snake eating the github user contribuitions (like snake game)"
        />
      </S.Container>
    </GuardSection>
  );
};

export { SnakeSection };
