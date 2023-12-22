import { useRef } from 'react';

import { DisplayBlock, SimpleInput } from 'components';
import { events } from 'app';

import { useForceUpdate } from 'hooks';
import { debounce, filterArrayByQueryMatch, getSocialImgUrl } from 'utils';

import { social_icons } from 'resources';

import * as S from './styles';

const Adding = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const forceUpdate = useForceUpdate();

  const handleAddSocial =
    (name: string, value: Record<string, unknown>) => () => {
      const path = `content.socials.${name}`;

      events.canvas.edit({ path, value });
    };

  const { value = '' } = inputRef.current || {};

  const filteredOptions = filterArrayByQueryMatch(value, social_icons, [
    'name',
  ]);

  return (
    <>
      <SimpleInput
        ref={inputRef}
        onInput={debounce(forceUpdate, 200)}
        placeholder="Search..."
      />

      <S.Content>
        {filteredOptions.map(({ icons: [icon], name, short_name, badge }) => (
          <DisplayBlock
            key={name}
            display={getSocialImgUrl('icon', name, { icon })}
            label={short_name || name}
            onClick={handleAddSocial(name, { ...badge, short_name, icon })}
          />
        ))}
      </S.Content>
    </>
  );
};

export { Adding };
