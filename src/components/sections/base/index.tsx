import { useCanvas } from 'hooks';
import { events } from '@events/base';

import { Sections } from 'types';
import * as S from './styles';

type BaseSectionProps = {
  id: string;
  type: Sections;
  children: React.ReactNode;
};

const BaseSection = ({ id, type, children }: BaseSectionProps) => {
  const { currentSection } = useCanvas();

  const handleSelectSection = () => {
    events.editpanel.open(type);
    events.canvas.currentSection(id);
  };

  return (
    <S.Container
      isSelected={id === currentSection?.id}
      onClick={handleSelectSection}
      value={id}
    >
      {children}
    </S.Container>
  );
};

export { BaseSection };
