import * as S from './styles';

import { PanelBase } from '../base';
import { useCanvas } from 'hooks';

import { events } from '@events/base';
import { Blocks, Events } from 'types';

const PanelNewBlock = () => {
  const { contents } = useCanvas();

  const add = () => {
    events.emit(Events.CANVAS_ADD_CONTENT, {
      type: Blocks.TEXT,
      content: 'Ahhh... Hellow?',
    });
  };

  const remove = () => {
    const last = contents.length - 1;

    events.emit(Events.CANVAS_REMOVE_CONTENT, contents[last]?.id || '');
  };

  return (
    <PanelBase>
      <S.Container>
        <button onClick={add}>Add</button>
        <button onClick={remove}>Remove</button>
      </S.Container>
    </PanelBase>
  );
};

export { PanelNewBlock };
