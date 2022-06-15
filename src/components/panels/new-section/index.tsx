import { contents } from './contents';
import * as S from './styles';

const PanelNewSection = () => {
  return (
    <S.Container>
      {contents.map(({ icon: Icon, name, ...rest }) => (
        <S.Wrapper key={name} {...rest}>
          <S.Block>
            <Icon size={48} />
            {name}
          </S.Block>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export { PanelNewSection };
