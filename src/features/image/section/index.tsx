'use client';

import { useTranslations } from 'next-intl';

import { observer } from 'mobx-react-lite';

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

export const ImageSection = observer(function ImageSection(props: ImageProps) {
  const t = useTranslations('ui');
  const { content, styles } = props;

  const { url } = content;
  const { height, align, float } = styles;

  return (
    <div className="flex" style={{ justifyContent: align, float }}>
      <img style={{ height: `${height}px` }} src={url} alt={t('alts.image')} />
    </div>
  );
});
