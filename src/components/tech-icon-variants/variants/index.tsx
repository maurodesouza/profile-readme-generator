import { events } from 'app';
import { DisplayBlock } from 'components';

import * as S from './styles';

type VariantsProps = {
  icon: string;
  provider: string;
  variants?: string[];
};

const Variants = ({ icon, provider, variants = [] }: VariantsProps) => {
  const handleChangeVariation = (value: number) => () => {
    const path = `content.icons.${icon}.config.${provider}.variant`;

    events.canvas.edit({ path, value });
  };

  return variants.length ? (
    <S.Container>
      <span>Variants</span>

      <S.Wrapper>
        {variants.map((path, index) => {
          return (
            <DisplayBlock
              key={path}
              display={path}
              onClick={handleChangeVariation(index)}
            />
          );
        })}
      </S.Wrapper>
    </S.Container>
  ) : null;
};

export { Variants };
