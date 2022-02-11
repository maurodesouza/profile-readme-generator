import { ChangeEvent, useEffect, useState } from 'react';

import { useCanvas } from 'hooks';
import { events } from '@events/index';

import * as S from './styles';
import { getDeepObjectProperty } from 'utils';

type SwitchProps = {
  label: string;
  path: string;
};

const Switch = ({ label, path }: SwitchProps) => {
  const { currentSection } = useCanvas();
  const [checked, setChecked] = useState(() =>
    getDeepObjectProperty<boolean>(currentSection?.props, path)
  );

  const handleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked: value } = event.target;
    const id = currentSection!.id;

    events.canvas.edit({ id, path, value });
    setChecked(!!value);
  };

  useEffect(() => {
    const value = getDeepObjectProperty<boolean>(currentSection?.props, path);

    setChecked(!!value);
  }, [currentSection]);

  return (
    <S.Container>
      <S.Switch>
        <S.Input type="checkbox" checked={checked} onChange={handleUpdate} />
        <S.Slider />

        <S.Track>
          <S.Dot />
        </S.Track>
      </S.Switch>

      <S.Label>{label}</S.Label>
    </S.Container>
  );
};

export { Switch };
