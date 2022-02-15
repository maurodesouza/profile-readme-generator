import { objectToQueryParams } from 'utils';

import { urls } from './urls';
import * as S from './styles';

type Content = {
  type: keyof typeof urls;
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

  const url = urls[type]('maurodesouza');
  const fullUrl = `${url}${objectToQueryParams(props)}`;

  return (
    <S.Container {...styles}>
      <img src={fullUrl} alt="Profile views count" />
    </S.Container>
  );
};

export { ProfileViewsSection };
