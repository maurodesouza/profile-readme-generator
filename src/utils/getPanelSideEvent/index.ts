import { Events, PanelSide } from 'types';

const getPanelSideEvent = (side: PanelSide) => {
  const panelsEvents = {
    right: Events.PANEL_RIGHT_OPEN,
    left: Events.PANEL_LEFT_OPEN,
  };

  return panelsEvents[side];
};

export { getPanelSideEvent };
