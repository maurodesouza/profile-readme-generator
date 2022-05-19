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

const ALTS = {
  recently: 'Spotify recently played',
  currently: 'Widget with the current Spotify song',
};

const generateMusicSection = ({
  content,
  styles,
}: GenerateMusicSectionArgs) => {
  const { type, ...rest } = content;
  const { align } = styles;

  const { spotifyAccountUrl, imageUrl } = getMusicUrl(type, rest[type]);
  const alt = ALTS[type];

  return `
    <div align="${align}">
      ${spotifyAccountUrl ? `<a href="${spotifyAccountUrl}">` : ''}
        <img src="${imageUrl}" alt="${alt}" />
      ${spotifyAccountUrl ? `</a>` : ''}
    </div>
  `;
};

export { generateMusicSection };
