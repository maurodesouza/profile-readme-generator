import { url } from '#/utils/url';
import { Sections } from '#/types';

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

type MusicSectionParserArgs = {
  content: Content;
  styles: Styles;
};

const ALTS = {
  recently: 'Spotify recently played',
  currently: 'Widget with the current Spotify song',
};

const musicSectionParser = ({ content, styles }: MusicSectionParserArgs) => {
  const { type, ...rest } = content;
  const { align } = styles;

  const { spotifyAccountUrl, imageUrl } = url.getMusic(type, rest[type]);
  const alt = ALTS[type];

  return `
    <div data-importer="${Sections.MUSIC}" align="${align}">
      ${spotifyAccountUrl ? `<a href="${spotifyAccountUrl}">` : ''}
        <img src="${imageUrl}" alt="${alt}" />
      ${spotifyAccountUrl ? `</a>` : ''}
    </div>
  `;
};

export { musicSectionParser };
