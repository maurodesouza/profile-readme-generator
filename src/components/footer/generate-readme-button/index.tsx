import Link from 'next/link';

import { api } from 'services';
import * as S from './styles';

const FooterGenerateReadmeButton = () => {
  return (
    <Link href="/result" passHref>
      <S.Button onClick={() => api.put('generated-readmes')}>
        Generate README
      </S.Button>
    </Link>
  );
};

export { FooterGenerateReadmeButton };
