import { url } from '#/utils/url';
import { observer } from 'mobx-react-lite';

import { Params } from '#/types';


type Borders = Parameters<typeof url.getBorderUrl>[0];

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

export const BorderSection = observer(function BorderSection(
  props: ImageProps
) {
  const { content } = props;

  const { borders, provider } = content;

  const srcUrl = url.getBorderUrl(provider, borders[provider]);

  return (
    <div className="flex">
      <img className="w-full" src={srcUrl} />
    </div>
  );
});
