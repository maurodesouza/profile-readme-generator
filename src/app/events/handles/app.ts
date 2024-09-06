import { themes } from "styles"
import { Events } from 'types';

import { BaseEventHandle } from './base';

class AppHandleEvents extends BaseEventHandle {
    constructor() {
    super();

    }

    theme = (theme: keyof typeof themes) => {
        this.emit(Events.APP_SET_THEME, theme);
    }
}

export { AppHandleEvents };