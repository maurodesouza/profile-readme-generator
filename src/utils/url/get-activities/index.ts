import { config } from '#/config';
const { mediumBaseUrl } = config.general.urls.sections.activities;

export type ActivityUrlType = keyof typeof activitiesUrl;

const activitiesUrl = {
  medium: mediumBaseUrl,
};

const getActivities = (origin: ActivityUrlType) => {
  return activitiesUrl[origin];
};

export { getActivities };
