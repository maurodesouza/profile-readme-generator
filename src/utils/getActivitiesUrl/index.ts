import { general as generalConfig } from 'app/config/general';
import { objectToQueryParams } from '../objectToQueryParams';

const { mediumBaseUrl } = generalConfig.urls.sections.activities;

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
