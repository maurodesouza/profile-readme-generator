import { events } from 'app';
import { AlertBox } from 'components';
import { useSettings } from 'hooks';
import { useEffect } from 'react';
import { CanvasStatesEnum } from 'types';

import * as S from './styles';

type SnakeSectionProps = {
  id: string;
};

const SnakeSection = ({ id }: SnakeSectionProps) => {
  const { settings } = useSettings();

  const { github } = settings.user;

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
    <S.Container>
      <S.Image
        src="/assets/snake.svg"
        alt="An animation of snake eating the github user contribuitions (like snake game)"
      />
    </S.Container>
  ) : (
    <AlertBox />
  );
};

export { SnakeSection };
