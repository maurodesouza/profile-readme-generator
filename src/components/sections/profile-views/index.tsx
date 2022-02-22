import { getProfileViewsUrl, objectToQueryParams } from 'utils';

import * as S from './styles';

type Content = {
  type: Parameters<typeof getProfileViewsUrl>[0];
  props: Record<string, unknown>;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type ProfileViewsProps = {
  content: Content;
  styles: Styles;
};

const ProfileViewsSection = ({ content, styles }: ProfileViewsProps) => {
  const { type, props } = content;

  const url = getProfileViewsUrl(type, 'maurodesouza');
  const fullUrl = `${url}${objectToQueryParams(props)}`;

  return (
    <S.Container {...styles}>
      <img src={fullUrl} alt="Profile views count" />
    </S.Container>
  );
};

export { ProfileViewsSection };
