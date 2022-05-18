import { getMusicUrl } from 'utils';

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

type GenerateMusicSectionArgs = {
  content: Content;
  styles: Styles;
};

const generateMusicSection = ({
  content,
  styles,
}: GenerateMusicSectionArgs) => {
  const { type, recently } = content;
  const { align } = styles;

  const { spotifyAccountUrl, imageUrl } = getMusicUrl(type, recently);

  return `
   <div align="${align}">
      <a href="${spotifyAccountUrl}">
        <img src="${imageUrl}" alt="Spotify recently played" />
      </a>
   </div>
  `;
};

export { generateMusicSection };
