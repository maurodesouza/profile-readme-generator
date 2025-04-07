import { ChangeEvent, useEffect, useState } from 'react';

import * as S from './styles';

type SwitchProps = {
  label: string;
  defaultValue: unknown;
  direction?: 'column' | 'row';
  onChange?: (value: boolean) => void;
};

const Switch = ({ label, defaultValue, onChange, ...rest }: SwitchProps) => {
  const [checked, setChecked] = useState(!!defaultValue);

  const handleUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked: value } = event.target;

    onChange?.(!!value);
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
