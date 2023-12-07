import * as S from './styles';

type SectionStyles = {
  align: 'left' | 'center' | 'right';
};

type Content = {
  text: string;
  tag: string;
};

type TextSectionProps = {
  content: Content;
  styles: SectionStyles;
};

const TextSection = ({ content, styles }: TextSectionProps) => {
  const { text, ...rest } = content;

  return (
    <S.Container>
      <S.Text {...rest} {...styles}>
        {text.trim()}
      </S.Text>
    </S.Container>
  );
};

export { TextSection };
