import { useDragControls } from 'framer-motion';
import { IconName } from 'lucide-react/dynamic';

import { Icon } from 'components/ui/primitives/atoms/icon';
import { Tile } from 'components/ui/primitives/atoms/tile';
import { Text } from 'components/ui/primitives/atoms/text';

import { useExtensions } from 'hooks';
import { CanvasSection } from 'types';

type ItemProps = {
  data: CanvasSection;
};

export function Item(props: ItemProps) {
  const { data } = props;
  const dragControls = useDragControls();

  const { extensions } = useExtensions();

  const featureData = extensions['new-section'][data.type] as Record<
    string,
    string
  >;

  function extractSectionProp() {
    if (data.type) {
      return data.props.content.text;
    }

    return undefined;
  }

  const content = extractSectionProp();

  return (
    <Tile.Sortable
      value={data.id}
      dragListener={false}
      dragControls={dragControls}
      layout
    >
      <Tile.Container>
        <Tile.Drag onPointerDown={event => dragControls.start(event)} />

        <div className="w-5 grid place-items-center">
          <Icon name={featureData.icon as IconName} size={20} />
        </div>

        <Tile.Content className="flex justify-center flex-col min-w-0">
          <Tile.Label className="flex items-center  gap-xs">
            {data.type.replace('-', ' ')}
          </Tile.Label>

          {content && (
            <Text.Paragraph className="text-xs truncate">
              {content}
            </Text.Paragraph>
          )}
        </Tile.Content>
      </Tile.Container>
    </Tile.Sortable>
  );
}
