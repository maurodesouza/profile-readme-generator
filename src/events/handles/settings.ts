import { Events } from 'types';

import { BaseEventHandle } from './base';

type HandleEditArgs = {
  path: string;
  value: unknown;
};

class SettingsHandleEvents extends BaseEventHandle {
  constructor() {
    super();
  }

  edit = (args: HandleEditArgs) => {
    this.emit(Events.SETTINGS_EDIT, args);
  };
}

export { SettingsHandleEvents };
