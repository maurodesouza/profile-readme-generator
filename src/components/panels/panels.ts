import { PanelsEnum } from 'types';

import { PanelGeneratedFiles } from './generated-files';
import { PanelNewSection } from './new-section';
import { PanelTemplates } from './templates';
import { editingPanels } from './editing';

const panels = {
  ...editingPanels,
  [PanelsEnum.GENERATED_FILES]: PanelGeneratedFiles,
  [PanelsEnum.NEW_SECTION]: PanelNewSection,
  [PanelsEnum.TEMPLATES]: PanelTemplates,
};

export { panels };
