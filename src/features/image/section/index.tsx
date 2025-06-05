type Content = {
  url: string;
};

type Styles = {
  align: 'left' | 'center' | 'right';
  float: 'left' | 'none' | 'right';
  height: number;
};

type ImageProps = {
  content: Content;
  styles: Styles;
};

export function ImageSection(props: ImageProps) {
  const { content, styles } = props;

  const { url } = content;
  const { height, align, float } = styles;

  return (
    <div className="flex" style={{ justifyContent: align, float }}>
      <img style={{ height: `${height}px` }} src={url} alt="Image" />
    </div>
  );
}
