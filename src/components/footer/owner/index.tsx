import * as S from './styles';

const FooterOwner = () => {
  return (
    <S.Container>
      <S.Image
        src="/assets/icon-32.png"
        alt="A white circle with a dark file icon outlined in the center"
      />
      <S.Project>Profile Readme Generator</S.Project>
      <S.Mention>
        Developed and maintained by{' '}
        <a
          href="https://github.com/maurodesouza"
          target="_blank"
          rel="noreferrer"
        >
          Mauro de Souza
        </a>
      </S.Mention>
    </S.Container>
  );
};

export { FooterOwner };
