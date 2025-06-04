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

  /**
   * Use it to open the panel on mobile
   * @param side
   */
  open(side: PanelSide) {
    const { openEvent } = getPanelSideEvent(side);

    this.emit(openEvent);
  }

  /**
   * Use it to close the panel on mobile
   * @param side
   */
  close(side: PanelSide) {
    const { closeEvent } = getPanelSideEvent(side);

    this.emit(closeEvent);
  }
}

export { PanelHandleEvents };
