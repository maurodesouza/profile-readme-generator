import { events } from '@events/base';

import { Sections } from 'types';
import * as S from './styles';

type BaseSectionProps = {
  id: string;
  selected: boolean;
  type: Sections;
  children: React.ReactNode;
};

const BaseSection = ({ id, type, children, selected }: BaseSectionProps) => {
  const handleSelectSection = () => {
    events.editpanel.open(type);
    events.canvas.currentSection(id);
  };

  return (
    <S.Container selected={selected} onClick={handleSelectSection} value={id}>
      {children}
    </S.Container>
  );
};

export { BaseSection };
