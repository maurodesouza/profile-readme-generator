import { config } from 'config';
import { objectToQueryParams } from '../objectToQueryParams';

const { mediumBaseUrl } = config.general.urls.sections.activities;

const activitiesUrl = {
  medium: mediumBaseUrl,
};

const getActivitiesUrl = (
  origin: keyof typeof activitiesUrl,
  props: Record<string, unknown> = {}
) => {
  const postUrl = activitiesUrl[origin];

  return `${postUrl}?${objectToQueryParams(props)}`;
};

export { getActivitiesUrl };
