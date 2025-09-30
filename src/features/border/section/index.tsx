import { Params } from 'types';
import { getBorderUrl } from 'utils/getBorderUrl';

type Borders = Parameters<typeof getBorderUrl>[0];

type Content = {
  provider: Borders;
  borders: {
    [key in Borders]: Params;
  };
};

type ImageProps = {
  content: Content;
  styles: object;
};

export function BorderSection(props: ImageProps) {
  const { content } = props;

  const { borders, provider } = content;

  const url = getBorderUrl(provider, borders[provider]);

  return (
    <div className="flex">
      <img className="w-full" src={url} />
    </div>
  );
}
