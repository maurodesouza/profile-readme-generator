import * as S from './styles';

type Content = {
  url: string;
};

type Styles = {
  align: 'left' | 'center' | 'right';
  height: number;
};

type ImageProps = {
  content: Content;
  styles: Styles;
};

const ImageSection = ({ content, styles }: ImageProps) => {
  const { url } = content;
  const { height, ...rest } = styles;

  return (
    <S.Container {...rest}>
      <img height={height} src={url} alt="Image" />
    </S.Container>
  );
};

export { ImageSection };
