import { useCanvas } from 'hooks';
import { events } from '@events/base';

import * as S from './styles';

type BaseBlockProps = {
  id: string;
  children: React.ReactNode;
};

const BaseBlock = ({ id, children }: BaseBlockProps) => {
  const { currentContent } = useCanvas();

  const handleSelectSection = () => {
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
