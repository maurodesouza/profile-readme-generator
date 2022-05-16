import { objectToQueryParams } from './objectToQueryParams';

const postsUrl: Record<string, string> = {
  medium: 'https://github-read-medium-git-main.pahlevikun.vercel.app/latest',
};

const getPostsUrl = (
  origin: keyof typeof postsUrl,
  props: Record<string, unknown> = {}
) => {
  const postUrl = postsUrl[origin];

  return `${postUrl}?${objectToQueryParams(props)}`;
};

export { getPostsUrl };
