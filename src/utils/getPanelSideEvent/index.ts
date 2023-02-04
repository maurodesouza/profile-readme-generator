import { Events, PanelSide } from 'types';

const getPanelSideEvent = (side: PanelSide) => {
  const panelsOpenEvents = {
    right: Events.PANEL_RIGHT_OPEN,
    left: Events.PANEL_LEFT_OPEN,
  };

  const panelsCloseEvents = {
    right: Events.PANEL_RIGHT_CLOSE,
    left: Events.PANEL_LEFT_CLOSE,
  };

  return {
    openEvent: panelsOpenEvents[side],
    closeEvent: panelsCloseEvents[side],
  };
};

export { getPanelSideEvent };
