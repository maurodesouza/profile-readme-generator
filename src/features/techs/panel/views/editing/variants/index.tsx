import { actions } from 'lib/command';

import { Text } from '#/components/atoms/text';
import { DisplayBlock } from '#/components/atoms/display-block';

type VariantsProps = {
  icon: string;
  provider: string;
  variants?: string[];
};

export function Variants(props: VariantsProps) {
  const { icon, provider, variants = [] } = props;

  function handleChangeVariation(value: number) {
    return () => {
      const path = `content.icons.${icon}.config.${provider}.variant`;

      actions.canvas.edit({ path, value });
    };
  }
  return variants.length ? (
    <div className="w-full flex flex-col gap-xs">
      <Text.Strong>Variants</Text.Strong>

      <div className="grid grid-cols-4 gap-xs">
        {variants.map((path, index) => {
          return (
            <button key={path} onClick={handleChangeVariation(index)}>
              <DisplayBlock.Container>
                <DisplayBlock.Content>
                  <img src={path} className="size-3/5 " />
                </DisplayBlock.Content>
              </DisplayBlock.Container>
            </button>
          );
        })}
      </div>
    </div>
  ) : null;
}
