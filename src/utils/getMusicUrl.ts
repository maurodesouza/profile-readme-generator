import { objectToQueryParams } from './objectToQueryParams';

type Obj = Record<string, unknown>;

const SPOTIFY_PROFILE_BASE_URL = 'https://open.spotify.com/user';
const RECENTLY_BASE_URL =
  'https://spotify-recently-played-readme.vercel.app/api';

const getMusicUrl = (type: string, props: Obj = {}) => {
  const user = props.user as string | undefined;

  if (type === 'recently') {
    const spotifyAccountUrl = user && `${SPOTIFY_PROFILE_BASE_URL}/${user}`;
    const imageUrl = `${RECENTLY_BASE_URL}?${objectToQueryParams(props)}`;

    return { spotifyAccountUrl, imageUrl };
  }

  const { [props.project as string]: obj } = props;

  {
    const props = obj as Obj;

    const queries = objectToQueryParams((props.props ?? {}) as Obj);
    const imageUrl = `${props.url}?${queries}`;

    return { imageUrl };
  }
};

export { getMusicUrl };
