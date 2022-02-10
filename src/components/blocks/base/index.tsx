import { useCanvas } from 'hooks';
import { events } from '@events/base';

import { Blocks } from 'types';
import * as S from './styles';

type BaseBlockProps = {
  id: string;
  type: Blocks;
  children: React.ReactNode;
};

const BaseBlock = ({ id, type, children }: BaseBlockProps) => {
  const { currentContent } = useCanvas();

  const handleSelectSection = () => {
    events.editpanel.open(type);
    events.canvas.currentContent(id);
  };

  return (
    <S.Container
      isSelected={id === currentContent?.id}
      onClick={handleSelectSection}
    >
      {children}
    </S.Container>
  );
};

export { BaseBlock };
