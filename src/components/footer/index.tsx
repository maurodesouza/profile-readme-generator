import Link from 'next/link';
import { api } from 'services';
import { backup, restore } from 'local';

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

      <S.NavFileButton
        as="a"
        $hue="260"
        href=""
        download={`backup-${parseInt(Date.now() / 1e6)}.json`}
        onClick={backup}
        rel="noreferrer"
        target="_blank"
      >Backup</S.NavFileButton>

      <S.NavFileButton as="label" htmlFor="restore" $hue="240">Restore</S.NavFileButton>
      <S.NavRestoreInput type="file" id="restore" onChange={restore}/>

      <Link href="/result" passHref>
        <S.GenerateLink onClick={() => api.put('generated-readmes')}>
          Generate README
        </S.GenerateLink>
      </Link>
    </S.Container>
  );
};

export { Footer };
