import * as S from './styles';
import { getItems } from './items';
import { ResourceItem } from 'components/resource-item';

const PanelRecommendedResources = () => {
  const items = getItems();

  return (
    <S.Container>
      <S.Header>
        <S.Title>Level Up Your README</S.Title>

        <S.Wrapper>
          <p>
            Anyone can use templates — but when you know what you’re doing, it
            shows.
          </p>

          <p>
            👉 Explore resources that will upgrade your skills — and your
            README. Start now.
          </p>
        </S.Wrapper>
      </S.Header>

      <S.Content>
        {items.map(item => (
          <ResourceItem key={item.name} {...item} />
        ))}
      </S.Content>

      <S.Small>
        💡 This panel contains affiliate links. If you find something useful and
        make a purchase, I may earn a small commission ☕. Thanks for the
        support ❤
      </S.Small>
    </S.Container>
  );
};

export { PanelRecommendedResources };
