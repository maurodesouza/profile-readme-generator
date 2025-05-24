import { events } from 'app';

import * as S from './styles';
import { DisplayBlock } from 'components/ui/primitives/atoms/display-block';

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
            <button key={path} onClick={handleChangeVariation(index)}>
              <DisplayBlock.Container>
                <DisplayBlock.Content>
                  <img src={path} />
                </DisplayBlock.Content>
              </DisplayBlock.Container>
            </button>
          );
        })}
      </S.Wrapper>
    </S.Container>
  ) : null;
};

export { Variants };
