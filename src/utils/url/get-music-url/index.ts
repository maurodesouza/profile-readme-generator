import { config } from '#/config';
import { object } from '#/utils/object';

type Obj = Record<string, unknown>;

const { profileBaseUrl, recentlyPlayedBaseUrl } =
  config.general.urls.sections.music.spotify;

const getMusicUrl = (type: string, props: Obj = {}) => {
  if (type === 'recently') {
    const spotifyAccountUrl = (props.user &&
      `${profileBaseUrl}/${props.user}`) as string | undefined;

    const imageUrl = `${recentlyPlayedBaseUrl}?${object.objectToQueryParams(props)}`;

    return { spotifyAccountUrl, imageUrl };
  }

  const { [props.project as string]: obj } = props;

  {
    const props = obj as Obj;

    const queries = object.objectToQueryParams((props.props ?? {}) as Obj);
    const imageUrl = `${props.url}?${queries}`;

    return { imageUrl };
  }
};

export { getMusicUrl };
