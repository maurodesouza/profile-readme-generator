import { getMusicUrl } from 'utils';
import * as S from './styles';

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

const ALTS = {
  recently: 'Spotify recently played',
  currently: 'Widget with the current Spotify song',
};

const MusicSection = ({ content, styles }: MusicSectionProps) => {
  const { type, ...rest } = content;

  const { spotifyAccountUrl, imageUrl } = getMusicUrl(type, rest[type]);
  const alt = ALTS[type];

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    spotifyAccountUrl ? (
      <a href={spotifyAccountUrl}>{children}</a>
    ) : (
      <>{children}</>
    );

  return (
    <S.Container {...styles}>
      <Wrapper>
        <img src={imageUrl} alt={alt} />
      </Wrapper>
    </S.Container>
  );
};

export { MusicSection };
