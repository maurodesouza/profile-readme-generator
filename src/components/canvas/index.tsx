import { blockTypes } from 'components';

import { useCanvas } from 'hooks';
import * as S from './styles';

const Canvas = () => {
  const { contents } = useCanvas();

  return (
    <S.Container>
      {contents.map(({ type, id, ...rest }) => {
        const Block = blockTypes[type];

        return <Block key={id} {...rest} />;
      })}
    </S.Container>
  );
};

export { Canvas };
