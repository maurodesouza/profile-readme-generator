import { PanelsEnumType, PanelSide } from 'types';
import { getPanelSideEvent } from 'utils';

import { BaseEventHandle } from './base';

class PanelHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  open(side: PanelSide, panel: PanelsEnumType) {
    const event = getPanelSideEvent(side);

    this.emit(event, panel);
  }
}

export { PanelHandleEvents };
