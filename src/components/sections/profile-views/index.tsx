import { useEffect } from 'react';

import { AlertBox } from 'components';
import { useSettings } from 'hooks';

import { events } from 'app';
import { getProfileViewsUrl, objectToQueryParams } from 'utils';

import * as S from './styles';
import { CanvasStatesEnum } from 'types';

type Content = {
  type: Parameters<typeof getProfileViewsUrl>[0];
  props: Record<string, unknown>;
};

type Styles = {
  align: 'left' | 'center' | 'right';
};

type ProfileViewsProps = {
  id: string;
  content: Content;
  styles: Styles;
};

const ProfileViewsSection = ({ id, content, styles }: ProfileViewsProps) => {
  const { settings } = useSettings();

  const { type, props } = content;
  const { github } = settings.user;

  const url = getProfileViewsUrl(type, github as string);
  const fullUrl = `${url}${objectToQueryParams(props)}`;

  useEffect(() => {
    const state = github ? CanvasStatesEnum.DEFAULT : CanvasStatesEnum.ALERT;

    setTimeout(() => {
      events.canvas.edit({
        id,
        path: 'state',
        value: state,
      });
    });
  }, [github]);

  return github ? (
    <S.Container {...styles}>
      <img src={fullUrl} alt="Profile views count" />
    </S.Container>
  ) : (
    <AlertBox />
  );
};

export { ProfileViewsSection };
