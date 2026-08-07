'use client';

import { url } from '#/utils/url';
import { observer } from 'mobx-react-lite';

import { Params } from '#/types';

type Borders = Parameters<typeof url.getBorder>[0];

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

  const srcUrl = url.getBorder(provider, borders[provider]);

  return (
    <div className="flex">
      <img className="w-full" src={srcUrl} />
    </div>
  );
});
