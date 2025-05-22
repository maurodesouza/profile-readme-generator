import { IconName } from 'lucide-react/dynamic';

import { Icon } from 'components/ui/primitives/atoms/icon';

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
      {contents.map(({ icon, name, ...rest }) => (
        <S.Wrapper key={name} {...rest}>
          <S.Block>
            <Icon name={icon as IconName} size={48} />
            {name}
          </S.Block>
        </S.Wrapper>
      ))}

      {items.map(({ icon, name, ...rest }) => (
        <S.Wrapper key={name} {...rest}>
          <S.Block>
            <Icon name={icon as IconName} size={48} />
            {name}
          </S.Block>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export { PanelNewSection };
