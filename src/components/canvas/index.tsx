import { blockTypes, BaseBlock } from 'components';

import { useCanvas } from 'hooks';
import * as S from './styles';

const Canvas = () => {
  const { contents } = useCanvas();

  return (
    <S.Container>
      {contents.map(({ type, id, props }) => {
        const Block = blockTypes[type];

        return (
          <BaseBlock key={id} id={id} type={type}>
            <Block {...props} />
          </BaseBlock>
        );
      })}
    </S.Container>
  );
};

export { Canvas };
