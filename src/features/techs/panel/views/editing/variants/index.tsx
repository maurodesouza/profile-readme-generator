import { events } from '@events';

import { Text } from 'components/ui/primitives/atoms/text';
import { DisplayBlock } from 'components/ui/primitives/atoms/display-block';

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

      events.canvas.edit({ path, value });
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
