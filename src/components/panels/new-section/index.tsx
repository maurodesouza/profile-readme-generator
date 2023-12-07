import { useExtensions } from 'hooks';
import { PanelsEnum } from 'types';

import { contents } from './contents';
import * as S from './styles';

const PanelNewSection = () => {
  const { extensions } = useExtensions();

  const items = Object.values(
    extensions[PanelsEnum.NEW_SECTION] ?? {}
  ) as typeof contents;

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

      {items.map(({ icon: Icon, name, ...rest }) => (
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
