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

  const panelOpenEvents = {
    right: Events.PANEL_RIGHT_OPEN,
    left: Events.PANEL_LEFT_OPEN,
  };

  const panelCloseEvents = {
    right: Events.PANEL_RIGHT_CLOSE,
    left: Events.PANEL_LEFT_CLOSE,
  };

  return {
    showEvent: panelShowEvents[side],
    clearEvent: panelClearEvents[side],
    openEvent: panelOpenEvents[side],
    closeEvent: panelCloseEvents[side],
  };
};

export { getPanelSideEvent };
