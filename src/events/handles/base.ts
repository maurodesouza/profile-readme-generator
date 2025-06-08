import { config } from 'config';
import { Events } from 'types';

class BaseEventHandle {
  protected emit(event: Events, payload?: unknown) {
    const isDev = config.envs.environment === 'development';

    isDev && console.info(`events[emit]: ${event}`, payload);

    const customEvent = new CustomEvent(event, { detail: payload });
    document.dispatchEvent(customEvent);
  }
}

export { BaseEventHandle };
