import { Events } from 'types';

import { EventHandle } from './base';

type HandleEditArgs = {
  path: string;
  value: unknown;
};

class SettingsHandleEvents {
  constructor(private readonly handle: EventHandle) {}

  edit = (args: HandleEditArgs) => {
    this.handle.emit(Events.SETTINGS_EDIT, args);
  };
}

export { SettingsHandleEvents };
