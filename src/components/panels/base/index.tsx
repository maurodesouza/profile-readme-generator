import { useEffect, useState } from 'react';

import { Sticky } from 'components';
import { events } from 'app';

import { PanelsEnumType, PanelSide } from 'types';
import { getPanelSideEvent } from 'utils';

import { panels } from '../panels';
import * as S from './styles';

type PanelProps = {
  side: PanelSide;
};

const Panel = ({ side }: PanelProps) => {
  const [panel, setPanel] = useState<PanelsEnumType>();
  const Panel = panels[panel!] || panels.default;

  const handleChangePanel = (event: CustomEvent<PanelsEnumType>) => {
    setPanel(event.detail);
  };

  useEffect(() => {
    const event = getPanelSideEvent(side);
    events.on(event, handleChangePanel);

    return () => {
      events.off(event, handleChangePanel);
    };
  }, []);

  return (
    <Sticky>
      <S.Container>
        <Panel />
      </S.Container>
    </Sticky>
  );
};

export { Panel };
