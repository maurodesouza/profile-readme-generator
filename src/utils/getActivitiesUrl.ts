import { objectToQueryParams } from './objectToQueryParams';

const activitiesUrl: Record<string, string> = {
  medium: 'https://github-read-medium-git-main.pahlevikun.vercel.app/latest',
};

const getActivitiesUrl = (
  origin: keyof typeof activitiesUrl,
  props: Record<string, unknown> = {}
) => {
  const postUrl = activitiesUrl[origin];

  return `${postUrl}?${objectToQueryParams(props)}`;
};

export { getActivitiesUrl };
