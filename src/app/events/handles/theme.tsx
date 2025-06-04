import { Events } from 'types';

import { BaseEventHandle } from './base';

class ThemeHandleEvents extends BaseEventHandle {
  constructor() {
    super();

    this.use = this.use.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  use(theme: string) {
    this.emit(Events.USE_THEME, theme);
  }

  toggle() {
    this.emit(Events.TOGGLE_THEME);
  }
}

export { ThemeHandleEvents };
