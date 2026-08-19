'use client';

import { useTranslations } from 'next-intl';

import { url } from '#/utils/url';
import { observer } from 'mobx-react-lite';

type Obj = {
  [key: string]: unknown;
};

type MusicTypes = {
  recently: Obj;
  currently: Obj;
};

type Content = MusicTypes & {
  type: keyof MusicTypes;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type MusicSectionProps = {
  id: string;
  content: Content;
  styles: Styles;
};

export const MusicSection = observer(function MusicSection(
  props: MusicSectionProps
) {
  const { content, styles } = props;
  const { type, ...rest } = content;

  const t = useTranslations('ui.alts');

  const { spotifyAccountUrl, imageUrl } = url.getMusic(type, rest[type]);
  const alt = t(`spotify-${type}`);

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    spotifyAccountUrl ? (
      <a href={spotifyAccountUrl}>{children}</a>
    ) : (
      <>{children}</>
    );

  return (
    <div className="flex gap-sm" style={{ justifyContent: styles.align }}>
      <Wrapper>
        <img src={imageUrl} alt={alt} className="max-w-full" />
      </Wrapper>
    </div>
  );
});
