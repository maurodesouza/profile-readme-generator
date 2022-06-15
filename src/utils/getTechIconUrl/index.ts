import { general as generalConfig } from 'app/config/general';

const { iconBaseUrl } = generalConfig.urls.sections.techs;

const getTechIconUrl = (tech: string, icon: string) =>
  `${iconBaseUrl}/${tech}/${tech}-${icon}.svg`;

export { getTechIconUrl };
