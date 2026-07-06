export * from './valueof';

export type ActionPaths<T> = T extends (...args: any[]) => any
  ? never
  : {
      [K in keyof T & string]: T[K] extends (...args: any[]) => any
        ? K
        : `${K}.${ActionPaths<T[K]>}`;
    }[keyof T & string];

export type DeepKeyPaths<T> = T extends object
  ? {
      [K in keyof T & string]: K | `${K}.${DeepKeyPaths<T[K]>}`;
    }[keyof T & string]
  : never;

export type DeepKeys<T> = T extends object
  ? {
      [K in keyof T]: K | DeepKeys<T[K]>;
    }[keyof T]
  : never;

export type PathValue<
  T,
  P extends string,
> = P extends `${infer K}.${infer Rest}`
  ? K extends keyof T
    ? PathValue<T[K], Rest>
    : never
  : P extends keyof T
    ? T[P]
    : never;

export type PayloadFromAction<T> = T extends (
  payload: infer P,
  ...args: any[]
) => any
  ? P
  : never;

export type ReturnFromAction<T> = T extends (...args: any[]) => infer R
  ? Awaited<R>
  : never;
