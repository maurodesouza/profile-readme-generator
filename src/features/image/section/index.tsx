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

export function ImageSection(props: ImageProps) {
  const { content, styles } = props;

  const { url } = content;
  const { height, align } = styles;

  return (
    <div className="flex" style={{ justifyContent: align }}>
      <img height={height} src={url} alt="Image" />
    </div>
  );
}
