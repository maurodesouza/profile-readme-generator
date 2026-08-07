'use client';

import { useTranslations } from 'next-intl';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useDragControls } from 'framer-motion';
import type { Variants } from 'framer-motion';

import { Tile } from '#/components/atoms/tile';
import { Icon } from '#/components/atoms/icon';
import { Tooltip } from '#/components/atoms/tooltip';

import { actions } from '#/lib/command';
import { variants, animations } from './animations';

type ItemProps = {
  stats: string;
  isShowing: boolean;
};

export function Item(props: ItemProps) {
  const { isShowing, stats } = props;
  const dragControls = useDragControls();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const t = useTranslations('ui.stats-layout');

  function onChangeDisplay() {
    const path = `content.graphs.${stats}.show`;

    actions.canvas.section.edit({ path, value: !isShowing });
  }

  function onConfigure() {
    const query = new URLSearchParams(searchParams.toString());

    query.set('tab', 'config');
    query.set('config-view', stats);

    router.replace(`${pathname}?${query.toString()}`);
  }

  const label = isShowing ? t('hide') : t('show');
  const eyeIcon = isShowing ? 'eye' : 'eye-off';

  return (
    <Tile.Sortable
      value={stats}
      variants={variants.container as Variants}
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

          <Tooltip content={t('configure')} position="right" tone="brand">
            <Tile.Button onClick={onConfigure}>
              <Icon name="settings" />
            </Tile.Button>
          </Tooltip>
        </Tile.Actions>
      </Tile.Container>
    </Tile.Sortable>
  );
}
