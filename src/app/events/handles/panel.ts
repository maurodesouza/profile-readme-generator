import { PanelsEnumType, PanelSide } from 'types';
import { getPanelSideEvent } from 'utils';

import { BaseEventHandle } from './base';

class PanelHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  show(side: PanelSide, panel: PanelsEnumType) {
    const { showEvent } = getPanelSideEvent(side);

    this.emit(showEvent, panel);
  }

  clear(side: PanelSide) {
    const { clearEvent } = getPanelSideEvent(side);

    this.emit(clearEvent);
  }
}

export { PanelHandleEvents };
