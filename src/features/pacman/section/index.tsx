import { GuardSection } from 'components/sections/guard';

import * as S from './styles';

type PacmanSectionProps = {
  id: string;
};

const PacmanSection = ({ id }: PacmanSectionProps) => {
  return (
    <GuardSection sectionId={id}>
      <S.Container>
        <S.Image
          src="/assets/pacman.svg"
          alt="An animation of pacman eating the github user contribuitions (like pacman game)"
        />
      </S.Container>
    </GuardSection>
  );
};

export { PacmanSection };
