import { objectToQueryParams } from './objectToQueryParams';

const SPOTIFY_PROFILE_BASE_URL = 'https://open.spotify.com/user';
const RECENTLY_BASE_URL =
  'https://spotify-recently-played-readme.vercel.app/api';

const getMusicUrl = (_: string, props: Record<string, unknown> = {}) => {
  const { user = '' } = props;

  const spotifyAccountUrl = `${SPOTIFY_PROFILE_BASE_URL}/${user}`;
  const imageUrl = `${RECENTLY_BASE_URL}?${objectToQueryParams(props)}`;

  return { spotifyAccountUrl, imageUrl };
};

export { getMusicUrl };
