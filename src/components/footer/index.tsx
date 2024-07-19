// @ts-ignore

import Link from 'next/link';
import { api } from 'services';
import { backup, restore } from 'local';

// import { navItems } from './nav';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Container>
      <S.NavBackupButton
        href=""
        download={`backup-${Math.ceil(Date.now() / 1e6).toString()}.json`}
        onClick={backup}
        rel="noreferrer"
        target="_blank"
      >
        Backup
      </S.NavBackupButton>

      <S.NavRestoreButton htmlFor="restore">Restore</S.NavRestoreButton>
      <S.NavRestoreInput type="file" id="restore" onChange={restore} />

      <Link href="/result" passHref>
        <S.GenerateLink onClick={() => api.put('generated-readmes')}>
          Generate README
        </S.GenerateLink>
      </Link>
    </S.Container>
  );
};

export { Footer };
