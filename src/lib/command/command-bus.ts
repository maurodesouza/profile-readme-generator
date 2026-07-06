import { dev } from 'utils/dev';
import type { TransitionStore } from './transitions-store';
import type { DispatchConfig, Dispose, Handler } from './types';

export class CommandBus {
  private handlers: Map<string, Handler> = new Map();

  constructor(private readonly transition: TransitionStore) {}

  handle<TPayload = unknown, TResult = void>(
    command: string,
    handler: Handler<TPayload, TResult>
  ): Dispose {
    if (this.handlers.has(command)) {
      dev.run(() =>
        console.error(
          `[command]: already exist a handle registered for ${command}`
        )
      );
      return () => null;
    }

    this.handlers.set(command, handler as Handler);

    return () => this.dispose(command);
  }

  async dispatch<TResult = void>(
    command: string,
    payload?: unknown,
    config?: DispatchConfig
  ): Promise<TResult | undefined> {
    dev.run(() => console.info(`[command dispatched]: ${command}`, payload));

    const handler = this.handlers.get(command);
    if (!handler) {
      const message = `[command]: no handler registered for ${command}`;
      dev.run(() => console.error(message));
      return;
    }

    const transitionKey = config?.transition ? config.transition : [command];
    this.transition.start(transitionKey);

    try {
      return (await handler(payload)) as TResult;
    } finally {
      this.transition.done(transitionKey);
    }
  }

  dispose(command: string): void {
    this.handlers.delete(command);
  }
}
