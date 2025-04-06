import Link from 'next/link';

import * as S from './styles';

type FooterGenericLinkProps = {
  href: string;
  label: string;
};

const FooterGenericLink = (props: FooterGenericLinkProps) => {
  return (
    <Link href={props.href} passHref>
      <S.Button>{props.label}</S.Button>
    </Link>
  );
};

export { FooterGenericLink };
