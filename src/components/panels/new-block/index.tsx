import { PanelBase } from '../base';

import { events } from '@events/base';
import { contents } from './contents';

import * as S from './styles';

const PanelNewBlock = () => {
  return (
    <PanelBase>
      <S.Container>
        {contents.map(({ icon: Icon, name, blockType }) => (
          <S.Wrapper key={name} onClick={() => events.canvas.add(blockType)}>
            <S.Block>
              <Icon size={48} />
              {name}
            </S.Block>
          </S.Wrapper>
        ))}
      </S.Container>
    </PanelBase>
  );
};

export { PanelNewBlock };
