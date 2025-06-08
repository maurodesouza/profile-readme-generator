import { BaseEventHandle } from './base';

import { Events, Extension } from 'types';
import { toArray } from 'utils';

class ExtensionsHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  register(extensions: Extension | Extension[]) {
    this.emit(Events.REGISTER_EXTENSION, toArray(extensions));
  }
}

export { ExtensionsHandleEvents };
