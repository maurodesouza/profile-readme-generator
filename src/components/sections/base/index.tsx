import { events } from '@events/base';

import * as S from './styles';

type BaseSectionProps = {
  id: string;
  selected: boolean;
  children: React.ReactNode;
};

const BaseSection = ({ id, children, selected }: BaseSectionProps) => {
  const handleSelectSection = () => {
    events.canvas.currentSection(id);
  };

  return (
    <S.Container
      data-sectionid={id}
      selected={selected}
      onClick={handleSelectSection}
      value={id}
    >
      {children}
    </S.Container>
  );
};

export { BaseSection };
