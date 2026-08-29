'use client';

import { observer } from 'mobx-react-lite';

import { useDragControls } from 'framer-motion';
import { IconName } from 'lucide-react/dynamic';

import { Icon } from '#/components/atoms/icon';
import { Tile } from '#/components/atoms/tile';
import { Text } from '#/components/atoms/text';
import { Clickable } from '#/components/atoms/clickable';

import { useExtensions, useTranslateField } from '#/hooks';
import { CanvasSection } from '#/types';
import { actions } from '#/lib/command';

type ItemProps = {
  data: CanvasSection;

  last: boolean;
  first: boolean;
};

export const Item = observer(function Item(props: ItemProps) {
  const { data, first, last } = props;
  const dragControls = useDragControls();

  const extensionsStore = useExtensions();
  const translate = useTranslateField();

  const featureData = extensionsStore.extensions['new-section'][
    data.type
  ] as Record<string, string>;

  function extractSectionProp() {
    if (data.type === 'text') {
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
      data-testid="reorder-item"
      data-sectionid={data.id}
    >
      <Tile.Container>
        <Tile.Drag onPointerDown={event => dragControls.start(event)} />

        <div className="w-5 grid place-items-center">
          <Icon name={featureData.icon as IconName} size={20} />
        </div>

        <Tile.Content className="flex justify-center flex-col min-w-0">
          <Tile.Label className="flex items-center  gap-xs">
            {translate(featureData.name)}
          </Tile.Label>

          {content && (
            <Text.Paragraph className="text-xs truncate">
              {content}
            </Text.Paragraph>
          )}
        </Tile.Content>

        <Tile.Actions className="ml-auto">
          <Clickable.Button
            size="icon"
            variant="icon"
            soft
            disabled={first}
            onClick={() => actions.canvas.section.moveUp(data.id)}
          >
            <Icon name="arrow-up" />
          </Clickable.Button>

          <Clickable.Button
            size="icon"
            variant="icon"
            soft
            disabled={last}
            onClick={() => actions.canvas.section.moveDown(data.id)}
          >
            <Icon name="arrow-down" />
          </Clickable.Button>
        </Tile.Actions>
      </Tile.Container>
    </Tile.Sortable>
  );
});
