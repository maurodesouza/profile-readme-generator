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

const MusicSection = ({ content, styles }: MusicSectionProps) => {
  const { type, recently } = content;

  const contents = {
    currently: () => <>Comming soon</>,
    recently: () => {
      const { spotifyAccountUrl, imageUrl } = getMusicUrl(type, recently);

      return (
        <a href={spotifyAccountUrl}>
          <img src={imageUrl} alt="Spotify recently played" />
        </a>
      );
    },
  };

  const Content = contents[type];

  return (
    <S.Container {...styles}>
      <Content />
    </S.Container>
  );
};

export { MusicSection };
