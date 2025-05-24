import { JSX } from 'react';

export type Renderable =
  | ((props?: unknown) => JSX.Element)
  | React.ReactElement;
