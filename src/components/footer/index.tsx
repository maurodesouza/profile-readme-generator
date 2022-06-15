import Link from 'next/link';
import { api } from 'services';

import { navItems } from './nav';
import * as S from './styles';

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
        {navItems.map((item, i) => (
          <S.NavItem key={i} {...item.props}>
            {item.label}
          </S.NavItem>
        ))}
      </S.Nav>

      <Link href="/result" passHref>
        <S.GenerateLink onClick={() => api.put('generated-readmes')}>
          Generate README
        </S.GenerateLink>
      </Link>
    </S.Container>
  );
};

export { Footer };
