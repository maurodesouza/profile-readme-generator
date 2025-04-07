import { PanelsEnum, PanelsEnumType } from 'types';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

type Panels = {
  [key in PanelsEnumType]?: ComponentType;
};

const panels: Panels = {
  [PanelsEnum.GENERATED_FILES]: dynamic(() =>
    import('./generated-files').then(
      mod => mod.PanelGeneratedFiles,
      () => () => null
    )
  ),

  [PanelsEnum.NEW_SECTION]: dynamic(() =>
    import('./new-section').then(
      mod => mod.PanelNewSection,
      () => () => null
    )
  ),

  [PanelsEnum.TEMPLATES]: dynamic(() =>
    import('./templates').then(
      mod => mod.PanelTemplates,
      () => () => null
    )
  ),

  [PanelsEnum.RECOMMENDED_RESOURCES]: dynamic(() =>
    import('./recommended-resources').then(
      mod => mod.PanelRecommendedResources,
      () => () => null
    )
  ),

  [PanelsEnum.USER_SETTINGS]: dynamic(() =>
    import('./user-settings').then(
      mod => mod.PanelUserSettings,
      () => () => null
    )
  ),
};

export { panels };
