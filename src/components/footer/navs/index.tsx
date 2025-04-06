import * as S from './styles';
import { navItems } from './nav';

const FooterNavs = () => {
  return (
    <S.Container>
      {navItems.map((item, i) => (
        <S.Nav key={i} {...item.props}>
          {item.label}
        </S.Nav>
      ))}
    </S.Container>
  );
};

export { FooterNavs };
