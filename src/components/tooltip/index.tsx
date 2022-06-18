import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import { Portal } from 'components';
import { TooltipPositions, TooltipVariants } from 'types';

import * as S from './styles';

type TooltipProps = {
  children: Parameters<typeof React.cloneElement>[0];
  position?: `${TooltipPositions}`;
  variant?: `${TooltipVariants}`;
  content: string;
};

const Tooltip = ({
  children,
  position = 'top',
  variant = 'info',
  content,
}: TooltipProps) => {
  const childrenRef = useRef<Element>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [childreRect, setChildreRect] = useState<DOMRect>({} as DOMRect);
  const [tooltipRect, setTooltipRect] = useState<DOMRect>({} as DOMRect);

  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  const getPosition = () => {
    const space = Number(theme.spacings.xsmall.replace(/\D/g, ''));

    const middleXTooltip = tooltipRect.width / 2;
    const middleYTooltip = tooltipRect.height / 2;

    const middleXChildren = childreRect.left + childreRect.width / 2;
    const middleYChildren = childreRect.top + childreRect.height / 2;

    const middleX = middleXChildren - middleXTooltip;
    const middleY = middleYChildren - middleYTooltip;

    const topChildren = childreRect.top - tooltipRect.height - space;
    const bottomChildren = childreRect.top + childreRect.height + space;

    const rightChildren = childreRect.left - tooltipRect.width - space;
    const leftChildren = childreRect.left + childreRect.width + space;

    const positionsX = { right: rightChildren, left: leftChildren };
    const positionsY = { top: topChildren, bottom: bottomChildren };

    const [y, x] = position.replace(/^(right|left)$/, '-$1').split(/-/) as [
      keyof typeof positionsY,
      keyof typeof positionsX
    ];

    return {
      x: positionsX[x] ?? middleX,
      y: positionsY[y] ?? middleY,
    };
  };

  const childrenProps = {
    ref: childrenRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  useEffect(() => {
    const childrenPositions = childrenRef.current!.getBoundingClientRect();
    const tooltipPositions = tooltipRef.current!.getBoundingClientRect();

    setChildreRect(childrenPositions);
    setTooltipRect(tooltipPositions);
  }, [content]);

  return (
    <>
      {React.cloneElement(children, childrenProps)}

      <Portal>
        <S.Container
          ref={tooltipRef}
          open={open}
          variant={variant}
          {...getPosition()}
        >
          {content}
        </S.Container>
      </Portal>
    </>
  );
};

export { Tooltip };
