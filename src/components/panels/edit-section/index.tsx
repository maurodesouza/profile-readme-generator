import { useEffect, useState } from 'react';

import { editingPanels } from 'components';
import { PanelBase } from '../base';

import { events } from '@events/base';
import { useCanvas } from 'hooks';

import { Sections, Events } from 'types';

const PanelEditSection = () => {
  const { currentSection } = useCanvas();

  const [panel, setPanel] = useState<Sections | undefined>(
    currentSection?.type
  );
  const PanelComponent = editingPanels[panel || 'default'];

  const handleChangePanel = (event: CustomEvent<Sections>) => {
    setPanel(event.detail);
  };

  useEffect(() => {
    events.on(Events.EDIT_PANEL_OPEN, handleChangePanel);

    return () => {
      events.off(Events.EDIT_PANEL_OPEN, handleChangePanel);
    };
  }, []);

  return (
    <PanelBase>
      <PanelComponent />
    </PanelBase>
  );
};

export { PanelEditSection };
