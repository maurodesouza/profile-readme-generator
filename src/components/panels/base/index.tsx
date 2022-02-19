import { Sticky } from 'components';
import * as S from './styles';

type PanelBaseProps = {
  children: React.ReactNode;
};

const PanelBase = ({ children }: PanelBaseProps) => {
  return (
    <Sticky>
      <S.Container>{children}</S.Container>
    </Sticky>
  );
};

export { PanelBase };
