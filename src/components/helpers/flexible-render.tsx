import React from 'react';
import { Renderable } from 'types';

type FlexibleRenderProps = {
  render?: Renderable;
};

export function FlexibleRender(props: FlexibleRenderProps) {
  const { render: Render } = props;

  if (!Render) return <React.Fragment />;

  if (React.isValidElement(Render)) return <>{Render}</>;

  return <Render />;
}
