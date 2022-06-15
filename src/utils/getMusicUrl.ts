import { general as generalConfig } from 'app/config/general';
import { objectToQueryParams } from './objectToQueryParams';

type Obj = Record<string, unknown>;

const { profileBaseUrl, recentlyPlayedBaseUrl } =
  generalConfig.urls.sections.music.spotify;

const getMusicUrl = (type: string, props: Obj = {}) => {
  const user = props.user as string | undefined;

  if (type === 'recently') {
    const spotifyAccountUrl = user && `${profileBaseUrl}/${user}`;
    const imageUrl = `${recentlyPlayedBaseUrl}?${objectToQueryParams(props)}`;

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
