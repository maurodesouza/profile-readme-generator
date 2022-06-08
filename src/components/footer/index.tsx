import * as S from './styles';
import Link from 'next/link';

const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
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
      </S.Wrapper>

      <S.Nav>
        <a
          href="https://github.com/maurodesouza/profile-readme-generator"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a>Improve your skills</a>
        <a
          href="https://www.paypal.com/donate/?hosted_button_id=FR3A2DGVYKGJS"
          target="_blank"
          rel="noreferrer"
        >
          Donate
        </a>
      </S.Nav>

      <Link href="/result" passHref>
        <S.GenerateLink>Generate README</S.GenerateLink>
      </Link>
    </S.Container>
  );
};

export { Footer };
