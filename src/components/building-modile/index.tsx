import * as S from './styles';

type BuildingModileProps = {
  children: React.ReactNode;
};

const BuildingModile = ({ children }: BuildingModileProps) => {
  return (
    <S.Container>
      <S.Desktop>{children}</S.Desktop>

      <S.Mobile>
        <S.Text>
          The Profile Readme Generator is still being adapted to work on smaller
          devices!
        </S.Text>

        <S.Img src="https://tenor.com/view/bricks-laying-gif-11905010.gif" />
      </S.Mobile>
    </S.Container>
  );
};

export { BuildingModile };
