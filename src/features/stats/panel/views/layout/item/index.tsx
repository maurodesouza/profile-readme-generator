import Router from 'next/router';
import { useDragControls } from 'framer-motion';

import { Tile } from 'components/ui/primitives/atoms/tile';
import { Icon } from 'components/ui/primitives/atoms/icon';
import { Tooltip } from 'components/ui/primitives/atoms/tooltip';

import { events } from 'app';
import { variants, animations } from './animations';

type EditSocialItemProps = {
  stats: string;
  isShowing: boolean;
};

export function Item(props: EditSocialItemProps) {
  const { isShowing, stats } = props;
  const dragControls = useDragControls();

  function getQueries() {
    return new URLSearchParams(window.location.search);
  }

  function onChangeDisplay() {
    const path = `content.graphs.${stats}.show`;

    events.canvas.edit({ path, value: !isShowing });
  }

  function onConfigure() {
    const query = getQueries();

    query.set('tab', 'config');
    query.set('config-view', stats);

    Router.replace(
      {
        pathname: window.location.pathname,
        query: query.toString(),
      },
      undefined,
      {
        shallow: true,
      }
    );
  }

  const label = isShowing ? 'Hide' : 'Show';
  const eyeIcon = isShowing ? 'eye' : 'eye-off';

  return (
    <Tile.Sortable
      value={stats}
      variants={variants.container}
      dragListener={false}
      dragControls={dragControls}
      layout
      {...animations.container}
    >
      <Tile.Container>
        <Tile.Drag onPointerDown={event => [dragControls.start(event)]} />

        <Tile.Content>
          <Tile.Label>{stats}</Tile.Label>
        </Tile.Content>

        <Tile.Actions>
          <Tooltip content={label} position="right" tone="brand">
            <Tile.Button onClick={onChangeDisplay}>
              <Icon name={eyeIcon} />
            </Tile.Button>
          </Tooltip>

          <Tooltip content="Configure" position="right" tone="brand">
            <Tile.Button onClick={onConfigure}>
              <Icon name="settings" />
            </Tile.Button>
          </Tooltip>
        </Tile.Actions>
      </Tile.Container>
    </Tile.Sortable>
  );
}
