import { useDragControls } from 'framer-motion';

import Router from 'next/router';

import { Tooltip } from 'components';
import { Icon } from 'components/ui/primitives/atoms/icon';

import { variants, animations } from './animations';
import { events } from 'app';

import * as S from './styles';

type EditSocialItemProps = {
  stats: string;
  isShowing: boolean;
};

const Item = ({ stats, isShowing }: EditSocialItemProps) => {
  const getQueries = () => new URLSearchParams(window.location.search);

  const dragControls = useDragControls();

  const handleChangeDisplay = () => {
    const path = `content.graphs.${stats}.show`;

    events.canvas.edit({ path, value: !isShowing });
  };

  const handleConfigure = () => {
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
  };

  const label = isShowing ? 'Hide' : 'Show';
  const eyeIcon = isShowing ? 'eye' : 'eye-off';

  return (
    <S.Container
      value={stats}
      variants={variants.container}
      dragListener={false}
      dragControls={dragControls}
      layout
      {...animations.container}
    >
      <S.Content>
        <S.Drag onPointerDown={event => [dragControls.start(event)]}>
          <Icon name="menu" size={20} />
        </S.Drag>

        <S.Wrapper>
          <S.Name>{stats}</S.Name>
        </S.Wrapper>

        <S.Actions>
          <Tooltip content={label} position="right" tone="brand">
            <S.Button onClick={handleChangeDisplay}>
              <Icon name={eyeIcon} />
            </S.Button>
          </Tooltip>

          <Tooltip content="Configure" position="right" tone="brand">
            <S.Button onClick={handleConfigure}>
              <Icon name="settings" />
            </S.Button>
          </Tooltip>
        </S.Actions>
      </S.Content>
    </S.Container>
  );
};

export { Item };
