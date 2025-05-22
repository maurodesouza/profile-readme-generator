import { Events, PanelSide } from 'types';

const getPanelSideEvent = (side: PanelSide) => {
  const panelShowEvents = {
    right: Events.PANEL_RIGHT_SHOW,
    left: Events.PANEL_LEFT_SHOW,
  };

  const panelClearEvents = {
    right: Events.PANEL_RIGHT_CLEAR,
    left: Events.PANEL_LEFT_CLEAR,
  };

  return {
    showEvent: panelShowEvents[side],
    clearEvent: panelClearEvents[side],
  };
};

export { getPanelSideEvent };
