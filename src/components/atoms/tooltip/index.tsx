'use client';

import { tailwind } from '#/utils/tailwind';
import React, { useEffect, useRef, useState } from 'react';
import { tv } from 'tailwind-variants';

import { OnlyClientSide } from '#/components/helpers/only-client-side';
import { Portal } from '#/components/helpers/portal';
import { TooltipPositions } from '#/types';

const tooltipVariants = tv({
  base: 'palette-surface text-xs absolute rounded-md z-10 text-palette-contrast bg-palette-base border border-palette-line px-xs py-[calc(var(--spacing-xs)_/_2)]',
  variants: {
    open: {
      true: 'opacity-100 pointer-events-auto',
      false: 'opacity-0 pointer-events-none',
    },
  },

  defaultVariants: {
    open: false,
  },
});

type TooltipProps = {
  children: Parameters<typeof React.cloneElement>[0];
  position?: `${TooltipPositions}`;
  content: string;
  className?: string;
};

export function Tooltip(props: TooltipProps) {
  const { children, position = 'top', content, className } = props;

  const openTimeoutRef = useRef<NodeJS.Timeout>(undefined);
  const closeTimeoutRef = useRef<NodeJS.Timeout>(undefined);

  const childrenRef = useRef<Element>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  const [open, setOpen] = useState(false);
  const [mount, setMount] = useState(false);

  function handleMouseLeave() {
    setOpen(false);

    closeTimeoutRef.current = setTimeout(() => {
      setMount(false);
    }, 350);
  }

  function handleMouseEnter() {
    clearTimeout(closeTimeoutRef.current!);
    setMount(true);

    openTimeoutRef.current = setTimeout(() => {
      getPosition();
      setOpen(true);
    }, 100);
  }

  function getPosition() {
    const childrenRect = childrenRef.current!.getBoundingClientRect();
    const tooltipRect = tooltipRef.current!.getBoundingClientRect();

    const space = tailwind.getToken('--spacing-xs', {
      fallbackReturn: 0,
      formatToNumber: true,
    });

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
  }

  useEffect(() => {
    return () => {
      clearTimeout(openTimeoutRef.current!);
      clearTimeout(closeTimeoutRef.current!);
    };
  }, []);

  const childrenProps = {
    ref: childrenRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  return (
    <OnlyClientSide>
      {React.cloneElement(children, childrenProps)}

      {mount && (
        <Portal>
          <div
            ref={tooltipRef}
            style={{
              top: coordinate.y,
              left: coordinate.x,
            }}
            className={tooltipVariants({
              className,
              open,
            })}
          >
            {content}
          </div>
        </Portal>
      )}
    </OnlyClientSide>
  );
}
