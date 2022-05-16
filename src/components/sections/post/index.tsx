import { getPostsUrl } from 'utils';

import * as S from './styles';

type Content = {
  type: Parameters<typeof getPostsUrl>[0];
  [key: string]: unknown;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type PostSectionProps = {
  id: string;
  content: Content;
  styles: Styles;
};

const PostSection = ({ content, styles }: PostSectionProps) => {
  const { type, ...rest } = content;
  const url = getPostsUrl(type, rest);

  return (
    <S.Container {...styles}>
      <img src={url} alt={`Layout with last ${type} posts`} />
    </S.Container>
  );
};

export { PostSection };
