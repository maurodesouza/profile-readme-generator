import { useRef } from 'react';

import { TechIcon } from 'components';
import { events } from '@events/base';

import { useForceUpdate } from 'hooks';
import { debounce, filterArrayByQueryMatch } from 'utils';

import { tech_icons } from 'resources';

import * as S from './styles';

const Adding = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const forceUpdate = useForceUpdate();

  const handleAddTech = (name: string, icon: string) => () => {
    const path = `content.techs.${name}`;
    const value = { icon };

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
        {filteredOptions.map(({ icons: [icon], name, ...rest }) => (
          <TechIcon
            key={name}
            name={name}
            icon={icon}
            onClick={handleAddTech(name, icon)}
            {...rest}
          />
        ))}
      </S.Content>
    </>
  );
};

export { Adding };
