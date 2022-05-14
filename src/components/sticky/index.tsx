import * as S from './styles';

type StickyProps = {
  children: React.ReactNode;
};

const Sticky = ({ children }: StickyProps) => {
  return (
    <S.Container>
      <S.Sticky>{children}</S.Sticky>
    </S.Container>
  );
};

export { Sticky };
