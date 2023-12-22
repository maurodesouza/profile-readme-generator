import { getActivitiesUrl } from 'utils';

import * as S from './styles';

type Content = {
  type: Parameters<typeof getActivitiesUrl>[0];
  [key: string]: unknown;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type ActivitiesSectionProps = {
  id: string;
  content: Content;
  styles: Styles;
};

const ActivitiesSection = ({ content, styles }: ActivitiesSectionProps) => {
  const { type, ...rest } = content;
  const url = getActivitiesUrl(type, rest);

  return (
    <S.Container {...styles}>
      <img src={url} alt={`Layout with last ${type} posts`} />
    </S.Container>
  );
};

export { ActivitiesSection };
