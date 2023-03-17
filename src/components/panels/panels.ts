import { PanelsEnum } from 'types';
import { editingPanels } from './editing';

import dynamic from 'next/dynamic';

const panels = {
  ...editingPanels,

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
