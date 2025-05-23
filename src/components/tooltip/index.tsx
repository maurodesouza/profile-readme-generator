import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from 'styled-components';

import { OnlyClientSide, Portal } from 'components';
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
  variant = 'default',
  content,
}: TooltipProps) => {
  const openTimeoutRef = useRef<NodeJS.Timeout>(undefined);
  const closeTimeoutRef = useRef<NodeJS.Timeout>(undefined);

  const childrenRef = useRef<Element>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  const [open, setOpen] = useState(false);
  const [mount, setMount] = useState(false);

  const theme = useTheme();

  const handleMouseLeave = () => {
    setOpen(false);

    closeTimeoutRef.current = setTimeout(() => {
      setMount(false);
    }, 350);
  };

  const handleMouseEnter = () => {
    clearTimeout(closeTimeoutRef.current!);
    setMount(true);

    openTimeoutRef.current = setTimeout(() => {
      getPosition();
      setOpen(true);
    }, 100);
  };

  const getPosition = () => {
    const childrenRect = childrenRef.current!.getBoundingClientRect();
    const tooltipRect = tooltipRef.current!.getBoundingClientRect();

    const space = Number(theme.spacings.xsmall.replace(/\D/g, ''));

    const middleXTooltip = tooltipRect.width / 2;
    const middleYTooltip = tooltipRect.height / 2;

    const middleXChildren = childrenRect.left + childrenRect.width / 2;
    const middleYChildren = childrenRect.top + childrenRect.height / 2;

    const middleX = middleXChildren - middleXTooltip;
    const middleY = middleYChildren - middleYTooltip;

    const topChildren = childrenRect.top - tooltipRect.height - space;
    const bottomChildren = childrenRect.top + childrenRect.height + space;

    const rightChildren = childrenRect.left - tooltipRect.width - space;
    const leftChildren = childrenRect.left + childrenRect.width + space;

    const positionsX = { right: rightChildren, left: leftChildren };
    const positionsY = { top: topChildren, bottom: bottomChildren };

    const [y, x] = position.replace(/^(right|left)$/, '-$1').split(/-/) as [
      keyof typeof positionsY,
      keyof typeof positionsX,
    ];

    setCoordinate({
      x: (positionsX[x] ?? middleX) || 0,
      y: (positionsY[y] ?? middleY) || 0,
    });
  };

  const childrenProps = {
    ref: childrenRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  useEffect(() => {
    return () => {
      clearTimeout(openTimeoutRef.current!);
      clearTimeout(closeTimeoutRef.current!);
    };
  }, []);

  return (
    <OnlyClientSide>
      {React.cloneElement(children, childrenProps)}

      {mount && (
        <Portal>
          <S.Container
            ref={tooltipRef}
            open={open}
            variant={variant}
            {...coordinate}
          >
            {content}
          </S.Container>
        </Portal>
      )}
    </OnlyClientSide>
  );
};

export { Tooltip };
