import Link from 'next/link';
import { api } from 'services';
import { backup, restore } from 'local';

// import { navItems } from './nav';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Container>
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
