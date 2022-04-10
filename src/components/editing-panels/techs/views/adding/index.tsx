import { useRef } from 'react';

import { DisplayBlock, SimpleInput } from 'components';
import { events } from 'app';

import { useForceUpdate } from 'hooks';
import { debounce, filterArrayByQueryMatch, getTechIconUrl } from 'utils';

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
      <SimpleInput
        ref={inputRef}
        onInput={debounce(forceUpdate, 200)}
        placeholder="Search..."
      />

      <S.Content>
        {filteredOptions.map(({ icons: [icon], name, short_name }) => (
          <DisplayBlock
            key={name}
            display={getTechIconUrl(name, icon)}
            onClick={handleAddTech({ icon, name, short_name })}
            label={short_name || name}
          />
        ))}
      </S.Content>
    </>
  );
};

export { Adding };
