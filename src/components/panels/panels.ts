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
};

export { panels };
