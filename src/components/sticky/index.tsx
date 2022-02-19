import * as S from './styles';

type PanelBaseProps = {
  children: React.ReactNode;
};

const Sticky = ({ children }: PanelBaseProps) => {
  return (
    <S.Container>
      <S.Sticky>{children}</S.Sticky>
    </S.Container>
  );
};

export { Sticky };
