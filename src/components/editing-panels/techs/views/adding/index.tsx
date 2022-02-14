import { useRef } from 'react';

import { TechIcon } from 'components';
import { events } from '@events/base';

import { useForceUpdate } from 'hooks';
import { debounce, filterArrayByQueryMatch } from 'utils';

import { tech_icons } from 'resources';

import * as S from './styles';

type HandleAddTechArgs = {
  icon: string;
  name: string;
  short_name?: string;
};

const Adding = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const forceUpdate = useForceUpdate();

  const handleAddTech =
    ({ icon, name, short_name }: HandleAddTechArgs) =>
    () => {
      const path = `content.techs.${name}`;
      const value = { icon, short_name };

      events.canvas.edit({ path, value });
    };

  const { value = '' } = inputRef.current || {};

  const filteredOptions = filterArrayByQueryMatch(value, tech_icons, [
    'name',
    'short_name',
  ]);

  return (
    <>
      <S.Input
        ref={inputRef}
        onInput={debounce(forceUpdate, 200)}
        placeholder="Filtre por aqui..."
      />

      <S.Content>
        {filteredOptions.map(({ icons: [icon], ...rest }) => (
          <TechIcon
            key={rest.name}
            icon={icon}
            onClick={handleAddTech({ icon, ...rest })}
            {...rest}
          />
        ))}
      </S.Content>
    </>
  );
};

export { Adding };
