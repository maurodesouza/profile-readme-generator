import type {
  ActionPaths,
  PathValue,
  PayloadFromAction,
  ReturnFromAction,
} from 'types/helpers';
import type { Actions } from './global';

// #region Transitions
export type TransitionKey = unknown | unknown[];
// #endregion

// #region Command Bus
export type Handler<TPayload = unknown, TResult = void> = (
  payload: TPayload
) => TResult | Promise<TResult>;

export type Dispose = () => void;

export type DispatchConfig = {
  transition?: TransitionKey;
};
// #endregion

// #region Instance Registry
export type Instance = {
  id: string;
  label?: string;
};
// #endregion

// #region Actions
export type Config = DispatchConfig & {
  instanceId: string;
};

export type Action<TPayload = undefined, TResult = void> = [TPayload] extends [
  undefined,
]
  ? (payload?: unknown, config?: DispatchConfig) => Promise<TResult>
  : [undefined] extends [TPayload]
    ? (payload?: TPayload, config?: DispatchConfig) => Promise<TResult>
    : (payload: TPayload, config?: DispatchConfig) => Promise<TResult>;

export type ScopedAction<TPayload = undefined, TResult = void> = [
  TPayload,
] extends [undefined]
  ? (payload: undefined, config: Config) => Promise<TResult>
  : (payload: TPayload, config: Config) => Promise<TResult>;
// #endregion

// #region Aliases
export type ActionPath = ActionPaths<Actions>;

export type ActionValue<TCommand extends ActionPath> = PathValue<
  Actions,
  TCommand
>;

export type CommandMeta = { label: string };
// #endregion

// #region Derived
export type ActionPayload<TCommand extends ActionPath> = PayloadFromAction<
  ActionValue<TCommand>
>;

export type ActionReturn<TCommand extends ActionPath> = ReturnFromAction<
  ActionValue<TCommand>
>;

export type IsScopedCommand<TCommand extends ActionPath> =
  ActionValue<TCommand> extends (payload: any, config: Config) => Promise<any>
    ? true
    : false;

export type HandleConfig<TCommand extends ActionPath> =
  IsScopedCommand<TCommand> extends true
    ? { instanceId: string; meta?: CommandMeta }
    : { instanceId?: string; meta?: CommandMeta };

export type SecondArg<T> = T extends (a: any, b: infer B) => any ? B : never;

export type ScopedCommands = {
  [K in ActionPath]: SecondArg<ActionValue<K>> extends Config ? K : never;
}[ActionPath];

export type UnscopedCommands = Exclude<ActionPath, ScopedCommands>;
// #endregion

export type SpecialProps =
  | 'name'
  | 'length'
  | 'prototype'
  | 'caller'
  | 'arguments'
  | 'toString';
