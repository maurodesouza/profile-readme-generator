import { useDragControls } from 'framer-motion';
import { Menu, Eye, EyeOff, Settings } from '@styled-icons/feather';

import Router from 'next/router';
import { Tooltip } from 'components';

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
  const Icon = isShowing ? Eye : EyeOff;

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
          <Menu />
        </S.Drag>

        <S.Wrapper>
          <S.Name>{stats}</S.Name>
        </S.Wrapper>

        <S.Actions>
          <Tooltip content={label} position="right" variant="info">
            <S.Button onClick={handleChangeDisplay}>
              <Icon size={16} />
            </S.Button>
          </Tooltip>

          <Tooltip content="Configure" position="right" variant="info">
            <S.Button onClick={handleConfigure}>
              <Settings size={16} />
            </S.Button>
          </Tooltip>
        </S.Actions>
      </S.Content>
    </S.Container>
  );
};

export { Item };
