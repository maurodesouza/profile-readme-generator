import { Events } from 'types';

import { BaseEventHandle } from './base';

class ResultHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  show(content: string) {
    this.emit(Events.RESULT_SHOW_CONTENT, content);
  }
}

export { ResultHandleEvents };
