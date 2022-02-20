import { forwardRef } from 'react';
import * as S from './styles';

type BaseContextMenuProps = {
  children: React.ReactNode;
};

export type DefaultContextMenuProps = {
  event: React.MouseEvent;
};

const BaseContextMenu: React.ForwardRefRenderFunction<
  HTMLDivElement,
  BaseContextMenuProps
> = ({ children }, ref) => {
  return <S.Container ref={ref}>{children}</S.Container>;
};

const BasecontextMenuFoward = forwardRef(BaseContextMenu);
export { BasecontextMenuFoward as BaseContextMenu };
