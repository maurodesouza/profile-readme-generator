import React, { useEffect, useMemo, useRef, useState } from 'react';
import { IconName } from 'lucide-react/dynamic';

import { events } from 'app';
import { PanelsEnumType, PanelSide } from 'types';

import { Icon } from 'components/ui/primitives/atoms/icon';

import { useExtensions, useOutsideClick } from 'hooks';
import { getPanelSideEvent } from 'utils';

import { panels } from '../panels';
import * as S from './styles';

type PanelProps = {
  side: PanelSide;
  initialPanel?: PanelsEnumType;
};

const chevrons = {
  left: 'chevron-left',
  right: 'chevron-right',
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
    const { openEvent, closeEvent } = getPanelSideEvent(side);

    events.on(openEvent, handleChangePanel);
    events.on(closeEvent, handleClosePanel);

    return () => {
      events.off(openEvent, handleChangePanel);
      events.off(closeEvent, handleClosePanel);
    };
  }, []);

  useOutsideClick(containerRef, () => setIsOpen(false), isOpen);

  const icon = chevrons[side] as IconName;

  return (
    <S.Container ref={containerRef} close={!isOpen}>
      <S.Toggle
        aria-label={`Toggle ${side} panel`}
        close={!isOpen}
        side={side}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon name={icon} size={24} />
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
