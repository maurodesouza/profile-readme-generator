import { ChangeEvent, useEffect, useState } from 'react';

import { events } from '@events/index';
import * as S from './styles';

type SwitchProps = {
  label: string;
  path: string;
  defaultValue: unknown;
  direction?: 'column' | 'row';
};

const Switch = ({ label, path, defaultValue, ...rest }: SwitchProps) => {
  const [checked, setChecked] = useState(!!defaultValue);

  const handleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked: value } = event.target;

    events.canvas.edit({ path, value });
    setChecked(!!value);
  };

  useEffect(() => {
    setChecked(!!defaultValue);
  }, [defaultValue]);

  return (
    <S.Container {...rest}>
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
