import { useEffect, useState } from 'react';

import { editingPanels } from 'components';
import { events } from '@events/base';

import { Blocks, Events } from 'types';
import { PanelBase } from '../base';
import { useCanvas } from 'hooks';

const PanelEditBlock = () => {
  const { currentContent } = useCanvas();

  const [panel, setPanel] = useState<Blocks | undefined>(currentContent?.type);
  const PanelComponent = editingPanels[panel || 'default'];

  const handleChangePanel = (event: CustomEvent<Blocks>) => {
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

export { PanelEditBlock };
