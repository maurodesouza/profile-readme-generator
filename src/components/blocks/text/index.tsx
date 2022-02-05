import * as S from './styles';

type TextBlockProps = {
  content: string;
};

const TextBlock = ({ content }: TextBlockProps) => {
  return <S.Container>{content}</S.Container>;
};

export { TextBlock };
