import { config } from '#/config';
const { mediumBaseUrl } = config.general.urls.sections.activities;

export type ActivityUrlType = keyof typeof activitiesUrl;

const activitiesUrl = {
  medium: mediumBaseUrl,
};

export function getActivities(origin: ActivityUrlType) {
  return activitiesUrl[origin];
}
