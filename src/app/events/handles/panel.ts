import { PanelsEnumType, PanelSide } from 'types';
import { getPanelSideEvent } from 'utils';

import { BaseEventHandle } from './base';

class PanelHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  open(side: PanelSide, panel: PanelsEnumType) {
    const { openEvent } = getPanelSideEvent(side);

    this.emit(openEvent, panel);
  }

  close(side: PanelSide) {
    const { closeEvent } = getPanelSideEvent(side);

    this.emit(closeEvent);
  }
}

export { PanelHandleEvents };
