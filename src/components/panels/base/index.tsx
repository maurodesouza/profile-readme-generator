import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from '@styled-icons/feather';

import { events } from 'app';
import { PanelsEnumType, PanelSide } from 'types';

import { useExtensions, useOutsideClick } from 'hooks';
import { getPanelSideEvent } from 'utils';

import { panels } from '../panels';
import * as S from './styles';

type PanelProps = {
  side: PanelSide;
  initialPanel?: PanelsEnumType;
};

const chevrons = {
  left: ChevronLeft,
  right: ChevronRight,
};

const Panel = ({ side, initialPanel }: PanelProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [panel, setPanel] = useState<PanelsEnumType | undefined>(initialPanel);

  const { extensions } = useExtensions();

  const allPanels = useMemo(
    () => ({
      ...panels,
      ...(extensions.panels ?? {}),
    }),
    [extensions]
  );

  const Panel = allPanels[panel!] || React.Fragment;

  const handleChangePanel = (event: CustomEvent<PanelsEnumType>) => {
    setPanel(event.detail);
    setIsOpen(true);
  };

  const handleClosePanel = () => setPanel(undefined);

  useEffect(() => {
    const { showEvent, clearEvent } = getPanelSideEvent(side);

    events.on(showEvent, handleChangePanel);
    events.on(clearEvent, handleClosePanel);

    return () => {
      events.off(showEvent, handleChangePanel);
      events.off(clearEvent, handleClosePanel);
    };
  }, []);

  useOutsideClick(containerRef, () => setIsOpen(false), isOpen);

  const Chevron = chevrons[side];

  return (
    <S.Container ref={containerRef} close={!isOpen}>
      <S.Toggle
        aria-label={`Toggle ${side} panel`}
        close={!isOpen}
        side={side}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Chevron size={24} />
      </S.Toggle>

      <S.Wrapper side={side}>
        <S.Box>
          <Panel />
        </S.Box>
      </S.Wrapper>
    </S.Container>
  );
};

export { Panel };
