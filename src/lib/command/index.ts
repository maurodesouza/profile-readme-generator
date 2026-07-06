import type { DeepKeys } from 'types/helpers';
import { CommandBus } from './command-bus';
import { InstanceRegistry } from './instance-registry';
import { TransitionStore } from './transitions-store';
import type { Actions } from './global';
import type {
  ActionPath,
  ActionPayload,
  ActionReturn,
  CommandMeta,
  Config,
  Handler,
  ScopedCommands,
  UnscopedCommands,
} from './types';

export type {
  Action,
  HandleConfig,
  IsScopedCommand,
  ScopedAction,
  UnscopedCommands,
} from './types';

export type { Actions } from './global';

export class Command {
  private $commandBus: CommandBus;
  private $transitions: TransitionStore;
  private $instanceRegistry: InstanceRegistry;

  constructor() {
    this.$transitions = TransitionStore.getInstance();
    this.$commandBus = new CommandBus(this.$transitions);
    this.$instanceRegistry = InstanceRegistry.getInstance();
  }

  handle<TCommand extends ScopedCommands>(
    command: TCommand,
    handler: Handler<ActionPayload<TCommand>, ActionReturn<TCommand>>,
    config: {
      instanceId: string;
      meta?: CommandMeta;
    }
  ): () => void;
  handle<TCommand extends UnscopedCommands>(
    command: TCommand,
    handler: Handler<ActionPayload<TCommand>, ActionReturn<TCommand>>,
    config?: {
      meta?: CommandMeta;
    }
  ): () => void;
  handle<TCommand extends ActionPath>(
    command: TCommand,
    handler: Handler<ActionPayload<TCommand>, ActionReturn<TCommand>>,
    config?: {
      instanceId?: string;
      meta?: CommandMeta;
    }
  ) {
    const result = this.parseCommand(command, config?.instanceId);
    const { domain, key, instanceId } = result;

    if (domain && instanceId) {
      this.$instanceRegistry.add(domain, {
        id: instanceId,
        label: config?.meta?.label,
      });
    }

    const dispose = this.$commandBus.handle<
      ActionPayload<TCommand>,
      ActionReturn<TCommand>
    >(key, handler);

    return () => {
      if (domain && instanceId)
        this.$instanceRegistry.remove(domain, instanceId);
      dispose();
    };
  }

  dispatch<TCommand extends ActionPath>(
    command: TCommand,
    payload?: ActionPayload<TCommand>,
    config?: Config
  ) {
    const result = this.parseCommand(command, config?.instanceId);
    return this.$commandBus.dispatch<ActionPayload<TCommand>>(
      result.key,
      payload,
      config
    );
  }

  getActionsProxy(path: DeepKeys<Actions>[] = []): Actions {
    return new Proxy(() => {}, {
      get: (_target, prop: DeepKeys<Actions>) => {
        return this.getActionsProxy([...path, prop]);
      },

      apply: (
        _target,
        _thisArg,
        args: [ActionPayload<ActionPath>, Config?]
      ) => {
        const commandName = path.join('.') as ActionPath;
        return this.dispatch(commandName, args[0], args[1]);
      },
    }) as unknown as Actions;
  }

  private parseCommand(command: ActionPath, instanceId?: string) {
    const parts = command.split('.');
    const hasDomain = parts.length > 1;

    if (!hasDomain) {
      return { domain: undefined, instanceId, key: command };
    }

    const domain = parts[0];
    const path = parts.slice(1).join('.');
    const key = instanceId ? `${instanceId}:${domain}.${path}` : command;

    return { domain, instanceId, key };
  }
}

export const command = new Command();

export const actions = command.getActionsProxy();
